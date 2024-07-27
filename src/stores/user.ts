import { ref, unref, type Ref } from 'vue'
import { defineStore } from 'pinia'

import { browserSessionPersistence, getAuth, onAuthStateChanged, setPersistence, signInWithEmailAndPassword, signOut, type User } from "firebase/auth";
// import { doc, getDoc, getFirestore } from 'firebase/firestore';


export const useUser = defineStore('user', () => {
  const auth = getAuth();
  const user: Ref<null | User> = ref(null);
  const isLoading = ref(false);

  async function login(email: string | Ref<string>, password: string | Ref<string>) {
    const _email = unref(email);
    const _password = unref(password);

    isLoading.value = true;
    await setPersistence(auth, browserSessionPersistence);
    const { user: data } = await signInWithEmailAndPassword(auth, _email, _password);
    user.value = data;
    isLoading.value = false;
  }

  async function logout() {
    user.value = null;
    isLoading.value = true;
    await signOut(auth);
    isLoading.value = false;
  }

  // // 로그인 상태가 변할 때마다 유저를 반영
  // async function syncUser() {
  //   const auth = getAuth();
  //   if (!auth.currentUser) {
  //     user.value = null;
  //     return;
  //   }

  //   const data = await getData(auth.currentUser.uid);
  //   if (data.exists()) {
  //     user.value = data.data();
  //     return;
  //   }
  // }
  // async function getData(uid: string) {
  //   const db = getFirestore()
  //   const data = await getDoc(doc(db, "user", uid));
  //   return data;
  // }
  onAuthStateChanged(auth, async (data) => {
    // await syncUser();
    user.value = data;
  });

  return { user, login, logout, isLoading }
})
