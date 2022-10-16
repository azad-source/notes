import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/todos', name: 'Todo List', component: () => import('@/views/TodosView.vue') },
];

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
