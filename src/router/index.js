import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routerOptions = [
  { path: '/', name: 'Login' },
  { path: '/home', name: 'Home' },
  { path: '/not-found', name: 'NotFound' },
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
