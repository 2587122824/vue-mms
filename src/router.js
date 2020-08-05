import Vue from "vue";
import VueRouter from "vue-router";
import Login from './views/login/index.vue';
import Layout from '@/components/layout'
Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path:'/login',//路由地址
            name:'login',//路由名称
            component:Login//组件对象
        },
        {
            path:'/',//路由地址
            name:'layout',//路由名称
            component:Layout//组件对象
        }
    ]
});
