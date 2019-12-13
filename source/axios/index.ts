/**
 * Axios （PS：二次封装）
 */
// 查询字符串解析和字符串化库
import qs from 'qs';
// 基于promise的HTTP库
import Axios from 'axios';
// 返回数据接口
import { IResData } from '../interface/IDataInterface';
// Vue
import Vue from 'vue';
// 是否统一处理错误信息
let isHandleError: boolean = true;

const instance: any = new Vue();

const axios: any = Axios.create({
    // 设置请求前缀
    baseURL: `https://api.oa.fenqile.com`,
    // 设置跨域请求时是否需要使用凭证
    withCredentials: true,
    // 设置请求头
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    // 向服务器发送之前，对数据处理
    transformRequest: [(data) => {
        if (data) {
            isHandleError = data.isHandleError ? false : true;
            data = qs.stringify(data);
        }
        return data;
    }]
});

axios.interceptors.response.use((res: any) => {
    const data: IResData = res.data;
    data.retcode = Number.parseInt(data.retcode as string, 10);
    switch(data.retcode) {
        case 0: break;
        default: shwoError(data, 1); break;
    }
    return data;
}, (error: any) => {
    shwoError(error, 2);
    return Promise.resolve(error);
});
export default axios;

// 显示错误模板
function shwoError(data: IResData, type: number): void {
    // 定义错误输出模板
    let message: string = '';
    if (1 === type) {
        message = `<div class="global-error">错误代码：${data.retcode}</div><div class="global-error">错误信息：${data.retmsg}</div>`;
    } else {
        const config: any = data.config;
        message = `接口<span class="global-error">【${config.url}】</span>发生错误啦，请休息一会再试试吧~`;
    }
    // 对请求异常信息进行友好展示
    instance.$notify.error({
        title: '错误提示',
        dangerouslyUseHTMLString: true,
        message
    });
}
