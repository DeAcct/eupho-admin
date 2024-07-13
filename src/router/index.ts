import { useUser } from '@/stores/user'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("@/views/Home.vue"),
      meta: {
        requireLogin: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login.vue"),
      meta: {
        requireLogin: false
      }
    }
  ]
})

router.beforeEach((to) => {
  if (!to.meta.requireLogin) {
    return true
  }
  const user = useUser();
  console.log(user.getUser)
  if (!user.getUser) {
    console.log("User not logged in")
    router.replace("/login")
  }
})

export default router
