import index from './views/index'
import login from './views/pages/login/login'
import kanbanlist from './views/pages/kanban/kanban'
import layout from './views/components/layout/layout'
const routers = [
    {
        path: '/',
        meta: {title: ''},
        component: index
    },
    {
        path: '/login',
        meta: {title: ''},
        component:login
    },
    {
        path: '/kanban',
        component: layout,
        children: [
          { path: '/', component: kanbanlist },
        ]
    }
];
export default routers;