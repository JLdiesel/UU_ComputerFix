import { createRouter, createWebHistory } from 'vue-router'
import Home from 'views/Home/Homepage.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('views/Encyclopedia/Encyclopedia.vue'),
   
  },
  {path: '/article',
    name: 'Article',
    component: () => import('views/Article/Article.vue'),
  },
  {
    path: '/mine',
    name: 'Mine',
    component:()=>import('views/Mine/Mine2.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component:()=>import('views/login/login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component:()=>import('views/Register/register.vue'),
  },
  {
    path: '/order',
    name: 'Order',
    component:()=>import('views/Order/order.vue'),
}, {
    path: '/pay',
    name: 'pay',
    // props: (route) => ({ query: route.query.id }),
    component:()=>import('views/Pay/pay.vue'),
  }, {
    path: '/ask',
    name: 'Ask',
    component:()=>import('views/askMan/ask.vue')
}, {
    path: '/changepw',
    name: 'changepw',
    component:()=>import('views/newPassword/NewPW.vue')
}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
