import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import TodosView from '@/views/TodosView.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Todo List', component: TodosView },
  { path: '/about', name: 'About', component: () => import('@/views/AboutView.vue') },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('@/views/ContactsView.vue'),
  },
];

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
