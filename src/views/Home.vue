<script lang="ts" setup>
import Common from "@/layout/Common.layout.vue";
import { useUser } from "@/stores/user";
import { storeToRefs } from "pinia";

const { user } = storeToRefs(useUser());
</script>

<template>
  <Common class="Home">
    <main class="Home__Contents">
      <h2 class="Home__Briefing">
        <strong class="Home__DisplayName"
          >{{ user?.displayName }} 사원님,</strong
        >
        오늘도 힘차게 시작해봐요
      </h2>
      <section class="Home__WorkBox">
        <RouterLink to="/project/anime"> </RouterLink>
        <RouterLink to="/project/week"></RouterLink>
        <RouterLink to="/project/theme"></RouterLink>
      </section>
    </main>
  </Common>
</template>

<style lang="scss" scoped>
.Home {
  &__Briefing {
    margin-top: 6rem;
    font-size: 4.6rem;
    font-weight: 300;
    text-wrap: pretty;
  }
  &__DisplayName {
    background: linear-gradient(
      90deg,
      hsl(var(--theme-500)),
      hsl(var(--theme-300))
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }
  &__Contents {
    width: min(calc(100% - 4.8rem), var(--view-max-width));
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
}
</style>
