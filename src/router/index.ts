import { createRouter, createWebHistory } from 'vue-router';
import PostsPage from '../pages/PostsPage.vue';

const routes = [
  { path: '/', redirect: '/posts' },
  { path: '/posts', component: PostsPage },
  { path: '/lazy', component: () => import('../pages/LazyPage.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
