import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routerOptions = [
  { path: '/', name: 'Login' },
  { path: '/home', name: 'Home' },
  { path: '/error', name: 'Error' },
  { path: '*', name: 'Error' },
];

const routes = routerOptions.map((r) => ({
  ...r,
  component: () => import(/* webpackChunkName: "[request]" */ `@/views/${r.name}.vue`),
}));

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
