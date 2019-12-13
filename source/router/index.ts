import Vue from 'vue';
import Router from 'vue-router';
import routes from './routersConfig';
Vue.use(Router);
const routerDef: Router =  new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

routerDef.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});
export default routerDef;
