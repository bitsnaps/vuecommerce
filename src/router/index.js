import Vue from 'vue'
import VueRouter from 'vue-router'
import AllProducts from '@/views/AllProducts';
import AllSmartphones from '@/views/AllSmartphones';
import AllNotebooks from '@/views/AllNotebooks';
import Product from '@/views/Product';
import CartCheckout from '@/views/CartCheckout';
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'All Products',
    component: AllProducts
  },
  {
    path: '/smartphones',
    name: 'Smartphones',
    component: AllSmartphones
  },
  {
    path: '/notebooks',
    name: 'Notebooks',
    component: AllNotebooks
  },
  {
    path: '/product-details',
    name: 'Product',
    component: Product,
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: CartCheckout,
  },
  /*{
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(
    // webpackChunkName: "about"
    '../views/About.vue')
  }*/
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
