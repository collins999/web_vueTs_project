// 公共函数接口
interface IUtils {
    url: string;
    params: any;
}
// 网络请求接口
interface IResData {
    // 请求接口信息（PS: require）
    interface_info?: object;
    // 数据结果（PS: require）
    result_rows: Array<any>;
    // 状态码（PS: require）
    retcode: number | string;
    // 状态描述（PS: require）
    retmsg: string;
    // 表格每一页条数（PS: no-require）
    limit?: number;
    // 表格每一页条数（PS: no-require）
    offset?: number;
    // 表格页码（PS: no-require）
    page?: number;
    // 表格条数（PS: no-require）
    total_num?: number;
    // 表格页数（PS: no-require）
    total_page?: number;
    // 请求接口信息（PS: no-require）
    config?: object;
}

// 用户登录信息接口
interface IUser {
    // 用户mid
    mid: number | string;
    // 用户min
    min: string;
    // 用户姓名
    name: string;
}

// 环境接口
interface IProfile {
    // 环境
    profile: string;
}
// VUEX-state 接口
interface IState {
    // 登录用户信息
    user: IUser;
    // 系统所在环境
    profile: string;
    // 权限SN-LIST
    permitList: Array<string>;
    // 人员列表
    perList: Array<IUser>;
    // 部门列表
    companyData: Array<any>;
}

// mod设置值接口
interface IDrawerData {
    // 标题
    title: string;
    // 显示状态
    visible: boolean;
    // 加载状态
    loading: boolean;
    // 抽屉方向
    direction: string;
    // 类型
    option: string;
}

// 校验规则接口
interface IRules {
    // 任意属性
    [propName: string]: any;
}

// 树形参数设置接口
interface IDefaultProps {
    // 名称
    label: string;
    // 子节点
    children: string;
}

// 分页对象接口
interface IPageItem {
    // 页码
    page: number;
    // 数据总和
    total: number;
    // 每页数据量
    limit: number;
}

// 审批对象
interface IQueryAprFlow {
    // 审批类型
    approval_type: string;
    // 审批ID
    approval_logic_id: string;
}

// 部门数据接口
interface IPropsCompany {
    // 子级字段名称
    children: string;
    // 展示名称字段
    label: string;
    // 展示值字段
    value: string;
    // 是够关联
    checkStrictly: boolean;
}

export { IUtils, IResData, IState, IUser, IDrawerData, IRules, IDefaultProps, IPageItem, IProfile, IQueryAprFlow, IPropsCompany };
