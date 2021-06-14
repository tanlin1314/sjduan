import Vue from 'vue'
import VueRouter from 'vue-router'
import commodity from '../views/commodity'

Vue.use(VueRouter)

const routes = [
    // 商品
  {
    path: '/',
    name: 'commodity',
    component: commodity
  },
    // 评价 evaluate
  {
    path: '/evaluate',
    name: 'evaluate',
    component: () => import('../views/evaluate.vue')
  },
    // 商家 business
  {
    path: '/business',
    name: 'business',
    component: () => import('../views/business.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
