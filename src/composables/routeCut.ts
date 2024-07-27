import { useRoute, useRouter } from "vue-router";
import { getAuth } from "firebase/auth";

// 로그인이 필요한 페이지에 접근할 때 로그인이 되어있지 않다면 로그인 페이지로 이동
export default function useRouteCut() {
  const router = useRouter();
  // const route = useRoute();

  router.beforeEach((to) => {
    // const auth = getAuth();
    // if (auth.currentUser) {
    //   return true
    // }
    // if (to.name !== "login") {
    //   return { name: "login" }
    // }
    // console.log(auth)
    // return true
    const auth = getAuth();
    console.log(auth.currentUser)
    console.log(to.name !== "login", !auth.currentUser)
    if (to.name !== "login" && !auth.currentUser) {
      return { name: "login" }
    }
    return true
  })
}