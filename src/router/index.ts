import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: "/emberek"},
    { path: '/emberek', component: () => import('@/views/PeopleList.vue') },
    { path: "/details/:id", component: () => import("@/views/ContactView.vue")}
  ],
  scrollBehavior (to,from,savedPosition){
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
