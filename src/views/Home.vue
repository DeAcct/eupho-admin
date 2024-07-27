<script lang="ts" setup>
import Common from "@/layout/Common.layout.vue";
import FileDropper from "@/components/FileDropper.vue";

import { useUser } from "@/stores/user";
import { useLandingCopy } from "@/composables/time";
import { storeToRefs } from "pinia";

const { user } = storeToRefs(useUser());
const landingCopy = useLandingCopy();
</script>

<template>
  <Common class="Home">
    <main class="Home__Contents">
      <section class="Home__Hero">
        <h2 class="Home__Briefing">
          <strong class="Home__DisplayName">{{ user?.displayName }} </strong>
          사원님, {{ landingCopy }}
        </h2>
      </section>
      <FileDropper class="Home__WorkItem" />
    </main>
  </Common>
</template>

<style lang="scss" scoped>
.Home {
  &__Hero {
    height: 45dvh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    // background: linear-gradient(hsl(var(--theme-500) / 0.5), transparent);
  }
  &__Briefing {
    font-size: 4.6rem;
    font-weight: 500;
    text-wrap: pretty;
    line-height: 1.3;
  }
  &__DisplayName {
    font-weight: 900;
  }
  &__WorkItem {
    flex-grow: 1;
    border-radius: 2.4rem;
    padding: 1.6rem;
    background-color: hsl(var(--bg-000));
    box-shadow: 0 0.6rem 4.8rem hsl(var(--text-500) / 0.15);
  }
}
</style>
