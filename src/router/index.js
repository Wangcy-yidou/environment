import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Index'),
    redirect: 'index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('../views/Home')
      },
      
      // 政务公开
      {
        path: '/government',
        name: 'government',
        component: () => import('../views/Government')
      },
      {
        path: '/special',
        name: 'special',
        component: () => import('../views/Special')
      },
      // 环境质量
      {
        path: '/environment',
        name: 'environment',
        component: () => import('../views/Environment')
      },
      {
        path: '/quality',
        name: 'quality',
        component: () => import('../views/Quality')
      },
      {
        path: '/science',
        name: 'science',
        component: () => import('../views/Science')
      },
      {
        path: '/administration',
        name: 'administration',
        component: () => import('../views/Administration')
      },
      {
        path: '/finance',
        name: 'finance',
        component: () => import('../views/Finance')
      }
    ]
  },
  {
    path: '/home2',
    name: 'home2',
    component: () => import('../views/Index_2'),
    redirect: 'index2',
    children: [
      {
        path: '/index2',
        name: 'index2',
        component: () => import('../views/Home')
      },
      
      // 政务公开
      {
        path: '/government2',
        name: 'government2',
        component: () => import('../views/Government')
      },
      {
        path: '/special2',
        name: 'special2',
        component: () => import('../views/Special')
      },
      // 环境质量
      {
        path: '/environment2',
        name: 'environment2',
        component: () => import('../views/Environment')
      },
      {
        path: '/quality2',
        name: 'quality2',
        component: () => import('../views/Quality')
      },
      {
        path: '/science2',
        name: 'science2',
        component: () => import('../views/Science')
      },
      {
        path: '/administration2',
        name: 'administration2',
        component: () => import('../views/Administration')
      },
      {
        path: '/finance2',
        name: 'finance2',
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
