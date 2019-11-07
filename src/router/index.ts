import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Cookies from 'js-cookie'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/base',
    component: Home,
    children: [
      {
        path: 'create',
        component: () => import('../views/BaseCreate.vue')
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if(Cookies.get('userToken') || to.path == '/login') {
    next()
  } else {
    next('/login')
  }
})

export default router;
