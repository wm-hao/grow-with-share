import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from "./components/HelloWorld";
import DashBoard from "./components/DashBoard";

Vue.use(VueRouter);

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: HelloWorld,

    },
    {
        path: '/',
        redirect: '/dashboard'
    },
    {
        path: '/dashboard',
        name: 'DashBoard',
        component: DashBoard
    }
];

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    next();
});


export default router
