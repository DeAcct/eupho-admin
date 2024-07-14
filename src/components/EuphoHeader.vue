<script lang="ts" setup>
import Logo from "@/components/Logo.vue";
import CommonButton from "./CommonButton.vue";
import { storeToRefs } from "pinia";
import { useUser } from "@/stores/user";
import { useRouter } from "vue-router";

const { logout } = useUser();
const router = useRouter();
async function onLogout() {
  await logout();
  router.push("/login");
}
</script>

<template>
  <header class="Header">
    <div class="Header__Wrap">
      <h1>
        <RouterLink to="/" class="Header__Logo">
          <Logo class="Header__LogoMark" />
          <span class="Header__LogoText">관리자</span>
        </RouterLink>
      </h1>
      <CommonButton filled class="Header__Logout" @click="onLogout">
        <template #text>로그아웃</template>
      </CommonButton>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.Header {
  background-color: hsl(var(--bg-000) / 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid hsl(var(--bg-50));
  padding: 0 2.4rem;

  &__Wrap {
    display: flex;
    align-items: center;
    height: 6.4rem;
    margin: 0 auto;
  }
  &__Logo {
    display: flex;
    align-items: center;
    padding-left: 1.2rem;
    padding-right: 1.6rem;
    height: 4rem;
    border-radius: 9999px;
    transition: background-color 150ms ease-out;
    &:hover {
      background-color: hsl(var(--theme-500) / 0.1);
      color: hsl(var(--theme-500));
    }
  }
  &__LogoMark {
    width: 3.6rem;
    height: 3.6rem;
    color: inherit;
  }
  &__LogoText {
    font-size: 2rem;
    font-weight: 300;
    color: inherit;
    transition: 150ms ease-out;
  }

  &__Logout {
    margin-left: auto;
  }
}
</style>
