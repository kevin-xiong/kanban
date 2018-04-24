const routers = [
    {
        path: '/',
        meta: {title: ''},
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/login',
        meta: {title: ''},
        component: (resolve) => require(['./views/pages/login/login.vue'], resolve)
    }
];
export default routers;