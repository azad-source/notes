import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import AboutView from '@/views/AboutView.vue';

const routes: RouteRecordRaw[] = [
  { path: '/about', name: 'About', component: AboutView },
  { path: '/', name: 'Todo List', component: () => import('@/views/TodosView.vue') },
];

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
