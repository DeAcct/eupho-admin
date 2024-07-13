import { ref, computed, unref, type Ref } from 'vue'
import { defineStore } from 'pinia'

import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, getFirestore } from 'firebase/firestore';

export const useUser = defineStore('user', () => {
  // const count = ref(0)
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }
  const user: Ref<null | {}> = ref(null);
  const getUser = computed(() => user.value);
  const isLoading = ref(false);

  const auth = getAuth();

  async function login(email: string | Ref<string>, password: string | Ref<string>) {
    const auth = getAuth();
    const _email = unref(email);
    const _password = unref(password);

    isLoading.value = true;
    const res = await signInWithEmailAndPassword(auth, _email, _password);
    user.value = res;
    isLoading.value = false;

    console.log(user.value)
  }

  // 로그인 상태가 변할 때마다 유저를 반영
  async function syncUser() {
    const auth = getAuth();
    if (!auth.currentUser) {
      user.value = null;
      return;
    }

    const data = await getData(auth.currentUser.uid);
    if (data.exists()) {
      user.value = data.data();
      return;
    }
  }
  async function getData(uid: string) {
    const db = getFirestore()
    const data = await getDoc(doc(db, "user", uid));
    return data;
  }
  onAuthStateChanged(auth, async () => {
    await syncUser();
  });

  return { user, getUser, login, isLoading }
})
