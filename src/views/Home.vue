<script lang="ts" setup>
import Common from "@/layout/Common.layout.vue";
import FileDropper from "@/components/FileDropper.vue";
import CommonButton from "@/components/CommonButton.vue";

import { useUser } from "@/stores/user";
// import { useLandingCopy } from "@/composables/time";
import { storeToRefs } from "pinia";

const { user } = storeToRefs(useUser());
// const landingCopy = useLandingCopy();
</script>

<template>
  <Common class="Home">
    <main class="Home__Contents">
      <section class="Home__Hero">
        <h2
          class="Home__Briefing"
          :class="
            typeof user?.displayName !== 'string' && 'Home__Briefing--Loading'
          "
        >
          <strong class="Home__DisplayName">{{ user?.displayName }}</strong>
          사원님, 환영합니다!
        </h2>
      </section>
      <!-- <FileDropper /> -->
      <section class="Home__Projects">
        <h3 class="Home__Title">최근 프로젝트</h3>
        <RouterLink to="/projects" class="Home__ViewMore">더보기</RouterLink>
        <div class="Home__Box">
          <ul></ul>
          아직 아무것도 없어요!
        </div>
      </section>
      <section class="Home__New">
        <CommonButton
          element="router-link"
          to="/new/anime"
          class="Home__WorkButton"
          data-button-style="filled"
          ><template #text>애니메이션 생성</template></CommonButton
        >
        <CommonButton
          element="router-link"
          to="/new/episode"
          class="Home__WorkButton"
          data-button-style="solid"
          ><template #text>에피소드 추가</template></CommonButton
        >
      </section>
    </main>
  </Common>
</template>

<style lang="scss" scoped>
@import "@/styles/mixins/Neumorphism.scss";
@import "@/styles/mixins/Animation.scss";

.Home {
  min-height: 100dvh;
  background-color: hsl(var(--bg-50));
  &__Hero {
    height: 45dvh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    // background: linear-gradient(hsl(var(--theme-500) / 0.5), transparent);
  }
  &__Briefing {
    font-size: 2.4rem;
    font-weight: 500;
    text-wrap: pretty;
    line-height: 1.3;
    width: calc(100% - 4.8rem);
    text-align: center;
    transition: 150ms ease-out;
    border-radius: 9999px;
    &--Loading {
      color: transparent;
      @include LoadingTarget;
    }
  }
  &__DisplayName {
    display: inline-block;
    font-weight: 900;
    min-width: 3ch;
    color: inherit;
  }
  &__Contents {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
  }
  &__Projects {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: calc(100% - 4.8rem);
    margin-bottom: 1.6rem;
    gap: 1.2rem;
  }
  &__Title {
    font-size: 1.8rem;
  }
  &__ViewMore {
    margin-left: auto;
    font-size: 1.4rem;
    color: hsl(var(--theme-500));
  }

  &__New {
    width: calc(100% - 4.8rem);
    display: flex;
    gap: 0.8rem;
  }
  &__WorkButton {
    flex-grow: 1;
    justify-content: center;
  }
  &__Box {
    width: 100%;
    min-height: 16rem;
    border-radius: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    @include Neumorphism(
      hsl(var(--bg-50)),
      hsl(var(--bg-000)),
      hsl(var(--bg-100))
    );
  }
}

@media screen and (min-width: 1080px) {
  .Home {
    &__Contents {
      justify-content: center;
    }
    &__Briefing {
      font-size: 3.2rem;
    }
    &__Box {
      width: 48rem;
    }
  }
}
</style>
