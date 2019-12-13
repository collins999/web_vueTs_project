/**
 * 依赖样式百度统计
 */
import './assets/css/common/index.scss';
import './assets/iconfont/iconfont.css';
import './assets/css/mode/common.scss';

import Vue from 'vue';
import './common/baiduStatistics.js';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
// import * as custom from './common/filters';
// // 全局注册过滤器
// Object.keys(custom).forEach((key: any) => {
//     Vue.filter(key, custom[key.toString()];
// });
import ElementUI from 'element-ui';
import './assets/css/common/element-variables.scss';
Vue.use(ElementUI);
// 百度统计统一接入代码
Vue.prototype.baiDuSet = (array: Array<string>): void => {
    const WINDOW: any = window;
    if ( WINDOW._hmt && Array.isArray(WINDOW._hmt)) {
        WINDOW._hmt.push(array);
    }
};
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app');
