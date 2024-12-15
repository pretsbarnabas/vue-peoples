import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: "/emberek"},
    { path: '/keszitette', component: () => import('@/views/ContactView.vue') },
    { path: '/emberek', component: () => import('@/views/PeopleList.vue') },
  ],
})

export default router
