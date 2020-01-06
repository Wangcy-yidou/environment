import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Index'),
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('../views/Home')
      },
      {
        path: '/special',
        name: 'special',
        component: () => import('../views/Special')
      },
      {
        path: '/Interaction',
        name: 'Interaction',
        component: () => import('../views/Interaction')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
