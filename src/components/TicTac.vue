<script setup lang="ts">
import { useTime } from "@/composables/time";

const { time } = useTime();
</script>
<template>
  <p class="TicTac">
    <span class="TicTac__Guide">현재시각</span>
    <Transition name="TimeTransition">
      <span :key="time.hh" class="TicTac__Unit">{{ time.hh }}</span></Transition
    >:<Transition name="TimeTransition">
      <span :key="time.mm" class="TicTac__Unit">{{ time.mm }}</span></Transition
    >:<Transition name="TimeTransition">
      <span :key="time.ss" class="TicTac__Unit">
        {{ time.ss }}
      </span>
    </Transition>
  </p>
</template>

<style lang="scss" scoped>
.TicTac {
  font-size: 1.4rem;
  &__Guide {
    margin-right: 0.4rem;
  }
  &__Unit {
    font-variant-numeric: tabular-nums;
  }
}

.TimeTransition-enter-active,
.TimeTransition-leave-active {
  transition: 150ms ease-out;
}
.TimeTransition-leave-active {
  display: none;
}

.TimeTransition-enter-from,
.TimeTransition-leave-to {
  opacity: 0;
  translate: 0 100%;
}
</style>
