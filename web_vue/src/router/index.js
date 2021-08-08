import Vue from 'vue'
import VueRouter from 'vue-router'

const  About = () => import('../views/About')
const Home = () => import( '../views/Home')
const lxl = () => import( '../views/lxl')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home,
        redirect: '/Home'
    },
    {
        path: '/About',
        name: 'About',
        component: About
    },
    {
        path: '/Home',
        component: Home,
        children: [
            {
                path: "lxl",
                component: lxl,
            }
        ]
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
