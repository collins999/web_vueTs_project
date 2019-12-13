import axios from '../axios';
import { Mutation, Getter, State } from 'vuex-class';
import { Component, Mixins, Vue } from 'vue-property-decorator';
import { IUser, IPageItem, IPropsCompany } from '../interface/IDataInterface';
import NotSn from '../components/Common/NotSn.vue';
import NotData from '../components/Common/NotData.vue';
@Component({
    components: {NotSn, NotData}
})
export default class MyOtherMixin extends Vue {
    @Getter('iUser') public user!: IUser;
    @Getter('profile') public profile!: string;
    @Getter('perList') public perList!: Array<IUser>;
    @Getter('companyData') public companyData!: Array<any>;
    // axios-全局设置
    public axios: any = axios;
    // 页面加载状态
    public loading: boolean = false;
    // 搜索用户列表
    public userList: Array<IUser> = [];
    // 定时器
    public timer: number | null = null;
    // 定时器
    public timerS: number | null = null;
    // 分页对象
    public pageItem: IPageItem = {
        page: 1,
        total: 0,
        limit: 10,
    };
    // 页面显示数量下拉列表设置
    public pageSizesArray: Array< number > = [10, 20, 50, 100];
    /**
     * [openUrl 打开一个url]
     * @version  [1.0]
     * @param    {string}  url [打开地址]
     */
    public openUrl(url: string, type?: string): void {
        const THIS: any = this;
        // 打开URL
        window.open(url);
    }
    /**
     * [userRemMethod 用户英文名搜索]
     * @version  [1.0]
     * @param    {string}       query [搜索关键字]
     * @return   {Array<IUser>}       [匹配列表]
     */
    public userRemMethod(query: string): void {
        if (query === '') {
            // this.userList = [];
        } else {
            this.userList = this.perList.filter((item: IUser) => {
                if (item.min.toLowerCase().startsWith(query.toLowerCase())) {
                    return item;
                }
            });
        }
    }
    /**
     * [pageChange 改变页码翻页]
     * @version  [1.0]
     * @param    {number}  page [修改页面值]
     */
    public pageChange(page: number): void {
        const THIS: any = this;
        this.pageItem.page = page;
        THIS.loadTableList();
    }
    /**
     * [handleSizeChange 改变每页数据显示条数]
     * @version  [1.0]
     * @param    {number}  val [选择表格显示数据]
     */
    public handleSizeChange(val: number): void {
        this.resetPageCondition({ limit: val });
    }
    /**
     * [resetPageCondition 重置分页查询条件]
     * @version  [1.0]
     * @param    {[type]}  { page = 1, total = 0, limit = this.pageItem.limit } = {} [分页参数]
     */
    public resetPageCondition({ page = 1, total = 0, limit = this.pageItem.limit } = {}): void {
        const THIS: any = this;
        Object.assign(this.pageItem, { page, total, limit });
        THIS.loadTableList();
    }
}
