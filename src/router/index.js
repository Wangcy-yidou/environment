import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Index'),
    redirect: 'index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('../views/Home')
      },
      // 政务公开
      {
        path: 'government',
        name: 'government',
        component: () => import('../views/Government')
      },
      {
        path: 'special',
        name: 'special',
        component: () => import('../views/Special')
      },
      // 环境质量
      {
        path: 'environment',
        name: 'environment',
        component: () => import('../views/Environment')
      },
      {
        path: 'quality',
        name: 'quality',
        component: () => import('../views/Quality')
      },
      {
        path: 'science',
        name: 'science',
        component: () => import('../views/Science')
      },
      {
        path: 'administration',
        name: 'administration',
        component: () => import('../views/Administration')
      },
      {
        path: 'finance',
        name: 'finance',
        component: () => import('../views/Finance')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
