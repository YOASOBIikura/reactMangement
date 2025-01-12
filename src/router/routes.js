import Home from "../view/home/Home";
import {lazy} from "react";


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: '首页'
        },
        children: [
            {
                path: '/main',
                name: 'main',
                component: lazy(()=>import('../view/home/Main')),
                meta: {
                    title: '主页'
                }
            },
            {
                path: '/user',
                name: 'user',
                component: lazy(()=>import('../view/user/User')),
                meta: {
                    title: '用户管理'
                }
            },
            {
                path: '/mall',
                name: 'mall',
                component: lazy(()=>import('../view/mall/Mall')),
                meta: {
                    title: '商品管理'
                }
            },
            {
                path: '/other/pageOne',
                name: 'pageOne',
                component: lazy(()=>import('../view/other/PageOne')),
                meta: {
                    title: '页面一'
                }
            },
            {
                path: '/other/pageTwo',
                name: 'pageTwo',
                component: lazy(()=>import('../view/other/PageTwo')),
                meta: {
                    title: '页面二'
                }
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: lazy(()=>import('../view/login/Login')),
        meta: {
            title: '登录'
        }
    }
]

export default routes