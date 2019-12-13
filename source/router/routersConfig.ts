// AsyncComponent（PS：用于vue项目中通过远程链接加载异步模块，异步模块不随项目一起打包）
import { AsyncComponent } from 'vue';
// RouteConfig
import { RouteConfig } from 'vue-router';

/**
 * 页面路由
 */
const Layout: AsyncComponent = (r: any) => require.ensure([], () => r(require('views/Layout/index.vue')), 'Layout' as any);
const NotFount: AsyncComponent = (r: any) => require.ensure([], () => r(require('views/Exception/NotFount.vue')));
const ViewOne: AsyncComponent = (r: any) => require.ensure([], () => r(require('views/ViewOne/index.vue')), 'ViewOne' as any);
const ViewTwo: AsyncComponent = (r: any) => require.ensure([], () => r(require('views/ViewTwo/index.vue')), 'ViewTwo' as any);
const ViewThree: AsyncComponent = (r: any) => require.ensure([], () => r(require('views/ViewThree/index.vue')), 'ViewThree' as any);
// 路由配置
const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect: {
            name: 'viewOne'
        },
        component: Layout,
        children: [
            {
                path: '/view1/viewOne',
                name: 'viewOne',
                meta: {
                    parent: 'view1',
                    title: '测试视图1',
                    icon: 'icon-ams-apply',
                    breadcrumb: [{path: '', name: '一级导航1'}, {path: '', name: '测试视图1'}],
                    keepAlive: true
                },
                component: ViewOne
            },
            {
                path: '/view2/viewTwo',
                name: 'viewTwo',
                meta: {
                    parent: 'view2',
                    title: '测试视图2',
                    icon: 'icon-ams-apply',
                    breadcrumb: [{path: '', name: '一级导航2'}, {path: '', name: '测试视图2'}],
                    keepAlive: true
                },
                component: ViewTwo
            },
            {
                path: '/view3/viewThree',
                name: 'viewThree',
                meta: {
                    parent: 'view3',
                    title: '测试视图3',
                    icon: 'icon-ams-apply',
                    breadcrumb: [{path: '', name: '一级导航3'}, {path: '', name: '测试视图3'}],
                    keepAlive: true
                },
                component: ViewThree
            },
        ]
    },
    {
        path: '*',
        name: 'notfount',
        component: NotFount
    }
];

export default routes;
