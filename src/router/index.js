import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routerOptions = [
  { path: '/', name: 'Login' },
  { path: '/home', name: 'Home' },
  { path: '/register', name: 'Register' },
  { path: '/forms/:formId', name: 'Forms' },
  { path: '/congratulations', name: 'Congratulations' },
  { path: '/profile', name: 'MyProfile' },
  { path: '/advances', name: 'MyAdvances' },
  { path: '/advances', name: 'MyAdvances' },
  { path: '/advance/:id', name: 'AdvanceDetail' },
  { path: '*', name: 'NotFound' },
];

const routes = routerOptions.map((r) => ({
  ...r,
  component: () => import(/* webpackChunkName: "[request]" */ `@/views/${r.name}/Index.vue`),
}));

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
