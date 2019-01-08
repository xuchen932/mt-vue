import Vue from 'vue'
import VueRouter from 'vue-router'
import Goods from '@/components/goods/Goods'
import Seller from '@/components/seller/Seller'
import Ratings from '@/components/ratings/Ratings'

Vue.use(VueRouter)
const routes = [
  {path: '/goods', component: Goods},
  {path: '/ratings', component: Ratings},
  {path: '/seller', component: Seller},
  {path: '/*', redirect: '/goods'}
]

export default new VueRouter({
  routes,
  linkActiveClass: 'active' // 这是给router-link添加动态点击样式
})

