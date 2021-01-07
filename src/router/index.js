import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  redirect: '/home',
  component: () => import('../views/Home.vue'),
  children: [{
    path: "/home",
    name: "home",
    component: () => import("../views/layout/home/index.vue")
  }, {
    path: "/discover",
    name: "discover",
    component: () => import("../views/layout/descover/index.vue")
  }, {
    path: "/cart",
    name: "cart",
    component: () => import("../views/layout/cart/index.vue")
  }, {
    path: "/mine",
    name: "mine",
    component: () => import("../views/layout/mine/index.vue")
  }]
}, ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router