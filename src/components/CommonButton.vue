<script lang="ts" setup>
// defineSlots<{
//   icon?: void;
//   text: void;
// }>;
withDefaults(
  defineProps<{
    element?: "button" | "a" | "router-link";
  }>(),
  { element: "button" }
);
</script>

<template>
  <component
    :is="element"
    :type="element === 'button' ? 'button' : undefined"
    class="CommonButton"
  >
    <i class="CommonButton__Icon" v-if="$slots.icon">
      <slot name="icon"></slot>
    </i>
    <span class="CommonButton__Text">
      <slot name="text"></slot>
    </span>
  </component>
</template>

<style lang="scss" scoped>
.CommonButton {
  display: flex;
  align-items: center;
  padding: 0 2.4rem;
  min-height: 4rem;
  gap: 0.8rem;
  background-color: transparent;
  border-radius: 9999px;
  outline: 0.4rem solid transparent;
  &:has(&__Icon) {
    padding: 0 2.4rem 0 1.6rem;
  }
  &__Icon {
    width: 2.4rem;
    height: 2.4rem;
  }
  &__Text {
    color: hsl(var(--theme-500));
    font-size: 1.4rem;
  }
  &:focus-visible {
    outline-color: hsl(var(--theme-500) / 0.3);
  }

  &[data-button-style="filled"] {
    background-color: hsl(var(--theme-500));
  }
  &[data-button-style="filled"] &__Text {
    color: hsl(var(--bg-000));
  }
  &[data-button-style="solid"] {
    background-color: hsl(var(--theme-500) / 0.15);
  }
  &[data-button-style="solid"] &__Text {
    color: hsl(var(--theme-500));
  }
}
</style>
