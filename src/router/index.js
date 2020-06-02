import Vue from 'vue'
import VueRouter from 'vue-router'
import AllProducts from '../components/AllProducts';
import AllSmartphones from '../components/AllSmartphones';
import AllNotebooks from '../components/AllNotebooks';
import Product from '../components/Product';
import CartCheckout from '../components/CartCheckout';
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
