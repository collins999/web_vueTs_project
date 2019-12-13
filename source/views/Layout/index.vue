<template>
    <el-container class="layout-container" v-if="homeLoading" :style="{ 'background-color': color }">
        <el-header>
            <div class="layout-logo">
                模板系统
            </div>
            <div class="layout-system" @click="reloadPage">
                {{ systemName }}
            </div>
            <!--头部菜单-->
            <el-menu :default-active="routeTop" @select="handleSelectTop" class="el-menu-demo" mode="horizontal" background-color="#001529" text-color="#fff" active-text-color="#001529">
                <el-menu-item index="view1">一级导航1</el-menu-item>
                <el-menu-item index="view2">一级导航2</el-menu-item>
                <el-menu-item index="view3">一级导航3</el-menu-item>
            </el-menu>
            <!--头部菜单-->
            <!--用户展示-->
            <div class="layout-right" @click=" perShow = !perShow;">
                <el-dropdown placement="bottom" @command="handleCommand">
                    <div class="el-dropdown-link">
                        <div class="layout-user">
                            <div class="layout-user-img">
                                <el-badge is-dot class="item" :hidden="isHiddenBadge">
                                    <el-avatar :size="30" >
                                        <img src="../../assets/image/user.png"/>
                                    </el-avatar>
                                </el-badge>
                            </div>
                            <transition name="el-zoom-in-center">
                                <div class="layout-user-min transition-box" v-show="perShow">{{ iUser.min }}<template v-if="iUser.name">（{{ iUser.name }}）</template></div>
                            </transition>
                        </div>
                    </div>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="feedback">意见反馈</el-dropdown-item>
                        <el-dropdown-item divided command="feedback" disabled>设置头像</el-dropdown-item>
                        <el-dropdown-item command="editionUpdate"><el-badge is-dot class="item" :hidden="isHiddenBadge">版本更新</el-badge></el-dropdown-item>
                        <el-dropdown-item divided command="quit">退出系统</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="layout-right">
                <div class="layout-user-min">
                    <div class="layout-user">
                        <el-color-picker v-model="color" size="mini" :show-alpha="true" @change="changeTheme" @active-change="activeChangeTheme"></el-color-picker>
                    </div>
                </div>
            </div>
            <!--用户展示-->
        </el-header>
        <el-main class="layout-main">
            <!--路径描述-->
            <div class="layout-main-breadcrumb">
                <el-breadcrumb separator="/">
                    <template v-for="item in $route.meta.breadcrumb">
                        <el-breadcrumb-item :to="item.path">{{ item.name }}</el-breadcrumb-item>
                    </template>
                </el-breadcrumb>
            </div>
            <!--路径描述-->
            <div class="layout-main-content">
                <!--子菜单-->
                <div class="layout-main-content-aside">
                    <el-menu :default-active="$route.path.split('/')[2]" class="el-icon-star-on" @select="handleSelectChild">
                        <template v-for="item in childrenList">
                            <el-menu-item :index="item.name" :key="item.name">
                                <i :class="item.meta.icon ? item.meta.icon : 'el-icon-s-home'" class="iconfont"></i>
                                <span slot="title">{{ item.meta.title }}</span>
                            </el-menu-item>
                        </template>
                    </el-menu>
                </div>
                <!--子菜单-->
                <!--body(页面内容)-->
                <el-main style=" padding: 0 20px;">
                    <transition name="fade-transverse" mode="out-in">
                        <keep-alive v-if="$route.meta.keepAlive">
                            <router-view></router-view>
                        </keep-alive>
                        <router-view v-if="!$route.meta.keepAlive"></router-view>
                    </transition>
                </el-main>
                <!--body(页面内容)-->
            </div>
        </el-main>
        <el-footer>{{ systemName }} {{ version }}） ©{{ year }} Created by ALL</el-footer>
        <Version :data="versionDialog"></Version>
    </el-container>
</template>
<script lang="ts">
import Axios from '../../axios';
import router from '../../router/routersConfig';
import MyMixins from '../../common/mixins';
import { Vue, Component } from 'vue-property-decorator';
import { Mutation, Getter } from 'vuex-class';
import Version from '../../components/Layout/Version.vue';
import { IResData, IUser, IProfile, IDrawerData } from '../../interface/IDataInterface';
@Component({
    components: { Version }
})
export default class Layout extends Vue {
    // 版本号
    private version: string = '1.0.0版本';
    // 系统名称
    private systemName: string = 'Vue+Ts';
    // this定义为一个常量
    private THIS: any = this;
    // 主题色
    private color: string = '#E4E7ED';
    // 设置全局用户信息
    @Mutation private SET_G_USET: any;
    // 设置全局系统环境信息
    @Mutation private SET_G_PROFILE: any;
    // 设置全局用户列表
    @Mutation private SET_G_PERLIST: any;
    // 设置全局部门列表
    @Mutation private SET_G_COMPONYDATA: any;
    // 当前年份
    private year: string | number = new Date().getFullYear();
    // 默认头部-菜单选中
    private routeTop: string = '';
    // 子菜单-菜单选中
    private routeChild: string = '';
    // 子菜单列表
    private childrenList: Array < any > = [];
    // 个人信息展示
    private perShow: boolean = false;
    // 是否展示更新信息
    private isHiddenBadge: boolean = false;
    // 登录用户信息
    private iUser: IUser = {
        min: '',
        mid: '',
        name: ''
    };
    // mod名称设置
    private titleKey: any = {
        version: this.version
    };
    // 版本更新
    private versionDialog: IDrawerData = {
        title: '',
        visible: false,
        loading: false,
        direction: '',
        option: ''
    };
    // 主页加载状态
    private homeLoading: boolean = true;
    // 钩子函数
    private created(): void {
        this.homeLoading = false;
        const loading = this.$loading({
            lock: true,
            text: '页面加载中，请稍等...',
            background: 'rgba(255, 255, 255, 0.7)'
        });
        const path: Array <string> = this.$route.path.split('/');
        // 默认头部选中
        this.routeTop = path[1] ? path[1] : 'view1';
        sessionStorage.setItem(this.routeTop, path[2] ? path[2] : 'viewOne');
        // 路由配置
        this.mapRouter();
        // 关闭遮罩
        let timer: any = setTimeout(() => {
            timer = null;
            this.homeLoading = true;
            loading.close();
        }, 2000);
    }
    // 钩子函数
    private mounted(): void {
    }
    /**
     * [changeTheme 主题修改回调]
     * @version  [1.0]
     * @param    {string}  coler [颜色值]
     */
    private changeTheme(color: string): void {}
    /**
     * [activeChangeTheme 面板中当前显示的颜色发生改变时触发]
     * @version  [3.0]
     * @param    {string}  coler [颜色值]
     */
    private activeChangeTheme(color: string): void {
        this.color = color;
    }
    /**
     * [mapRouter 获取子菜单列表]
     * @Author   stonehe
     * @modifier stonehe
     * @version  [1.0]
     */
    private mapRouter(): void {
        const routerArray = router[0];
        let childrenRouter: string | null = '';
        // 获取子菜单列表
        if (routerArray && routerArray.children && Array.isArray(routerArray.children)) {
            this.childrenList = [];
            // 获取子菜单列表
            routerArray.children.forEach((item) => {
                if (item.meta.parent === this.routeTop) {
                    this.childrenList.push(item);
                }
            });
            if (sessionStorage && sessionStorage[this.routeTop]) {
                childrenRouter = sessionStorage.getItem(this.routeTop);
            }
            // 设置默认子菜单的选中值
            if (this.childrenList.length) {
                this.handleSelectChild(childrenRouter ? childrenRouter : this.childrenList[0].name);
            }
        }
    }
    /**
     * [handleSelectTop 头部菜单选择事件]
     * @version  [1.0]
     * @param    {string}  key [选中菜单KEY]
     */
    private handleSelectTop(key: string): void {
        this.routeTop = key;
        this.mapRouter();
    }
    /**
     * [handleSelectChild 子菜单选择事件]
     * @version  [1.0]
     * @param    {string}  key [选中菜单KEY]
     */
    private handleSelectChild(key: string): void {
        sessionStorage.setItem(this.routeTop, key);
        this.$router.push({ name: key });
    }
    /**
     * [editionUpdate 查看版本更新日志]
     * @version  [1.0]
     */
    private editionUpdate(): void {
        // 打开弹窗
        Object.assign(this.versionDialog, {
            title: this.titleKey.version,
            visible: true
        });
        this.isHiddenBadge = true;
    }
    /**
     * [handleCommand 命令操作]
     * @version  [1.0]
     * @param    {string}  command [命令标识]
     */
    private handleCommand(command: string): void {
        switch (command) {
            case 'feedback':
                window.open('https://github.com/collins999');
                break;
            case 'quit':
                window.open('https://github.com/collins999');
                break;
            case 'editionUpdate':
                this[command]();
                break;
            default:
                break;
        }
    }
    /**
     * [reloadPage 刷新页面]
     * @version  [1.0]
     */
    private reloadPage(): void {
        window.location.reload();
    }
}
</script>
<style lang="scss" scoped>
@import '../../assets/css/mode/layout.scss';
.el-color-picker--mini {
    padding: 16px 5px;
}
.layout-user-img img:hover{
    transform: rotate(666turn);
    transition-delay: 1s;
    transition-property: all;
    transition-duration: 59s;
    transition-timing-function: cubic-bezier(.34,0,.84,1);
}

</style>