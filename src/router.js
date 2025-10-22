import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./Home.vue'),
  },
  {
    path: '/page-2',
    name: 'Page2',
    component: () => import('./Page2.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
