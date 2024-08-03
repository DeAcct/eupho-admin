import { useUser } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login.vue"),
    },
    {
      path: "/new-item",
      name: "new-item",
      component: () => import("@/layout/NewItem.layout.vue"),
    }
  ]
})

// router.beforeEach((to) => {
//   if (!to.meta.requireLogin) {
//     return true
//   }
//   const userStore = useUser();
//   const { user } = storeToRefs(userStore);
//   if (!user.value) {
//     console.log("User not logged in")
//     router.replace("/login")
//   }
// })

export default router
