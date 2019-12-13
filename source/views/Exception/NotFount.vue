<template>
    <div class="notfount-page">
        <img src="../../assets/image/404.png">
        <div>
           <el-button @click="gotoBack">返回上一页</el-button>
           <el-button @click="gotoHome" type="primary">返回首页</el-button>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component({
    components: {}
})
export default class NotFount extends Vue {
    // this定义为一个常量
    private THIS: any = this;
    /**
     * [reloadPage 刷新页面]
     * @Author   stonehe
     * @modifier stonehe
     * @version  [1.0]
     */
    private gotoBack(): void {
        this.$router.go(-1);
    }
    /**
     * [reloadPage 刷新页面]
     * @version  [1.0]
     */
    private gotoHome(): void {
        if (sessionStorage) {
            sessionStorage.clear();
        }
        this.$router.push({ name: 'amsApply' });
    }
}
</script>