<script lang="ts" setup>
import IconBase from "./IconBase.vue";
import IconClear from "./icons/IconClear.vue";

defineSlots<{
  icon?: void;
  label: void;
  input: void;
  supporting?: void;
  buttons?: void;
}>();

const emit = defineEmits<{
  (e: "clear"): void;
}>();
const inputValue = defineModel({
  default: "",
});
function clear() {
  emit("clear");
}
</script>

<template>
  <div class="TextField">
    <label
      class="TextField__Main"
      :class="inputValue.length && 'TextField__Main--Filled'"
    >
      <IconBase class="TextField__Icon" v-if="$slots.icon">
        <template #title>아이콘</template>
        <template #icon>
          <slot name="icon"></slot>
        </template>
      </IconBase>
      <span class="TextField__TextBox">
        <span class="TextField__Label">
          <slot name="label"></slot>
        </span>
        <slot name="input"></slot>
      </span>
      <button
        type="button"
        class="TextField__Button"
        v-if="inputValue.length"
        @click="clear"
      >
        <IconBase>
          <template #title>지우기</template>
          <template #icon>
            <IconClear />
          </template>
        </IconBase>
      </button>
      <slot name="buttons"></slot>
    </label>
    <div class="TextField__Supporting" v-if="$slots.supporting">
      <slot name="supporting"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.TextField {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  position: relative;

  &__Main {
    cursor: text;
    display: flex;
    align-items: center;
    gap: 1.6rem;
    min-height: 5.6rem;
    border: 1px solid hsl(var(--bg-500));
    border-radius: 0.4rem;
    padding: 0 1.2rem;

    &:focus-within,
    &--Filled {
      --TextField__LabelTop: -2.6rem;
      --TextField__LabelFontSize: 1.4rem;
      --TextField__LabelPadding: 0.4rem;
    }
    &:focus-within {
      border-color: hsl(var(--theme-500));
      --TextField__LabelColor: hsl(var(--theme-500));
    }
    &--Filled {
      --TextField__LabelColor: hsl(var(--bg-500));
      &:has(.TextField__Icon) {
        --TextField__LabelLeft: -4rem;
      }
    }
    &:has(:invalid) {
      --TextField__LabelAnimation: invalid 0.3s ease-out;
    }
  }
  &__Icon {
    width: 2.4rem;
    height: 2.4rem;
  }
  &__TextBox {
    flex-grow: 1;
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    & > * {
      font-size: inherit;
    }
  }
  &__Label {
    position: absolute;
    background-color: var(--Field__LabelTransparent);
    transition: translate 150ms ease-out;
    translate: var(--TextField__LabelLeft, 0) var(--TextField__LabelTop, 0);
    font-size: var(--TextField__LabelFontSize, 1.6rem);
    padding: 0 var(--TextField__LabelPadding, 0);
    color: var(--TextField__LabelColor, hsl(var(--bg-300)));
    font-weight: 600;
    animation: var(--TextField__LabelAnimation, none);
  }
  &__Button {
    margin-left: auto;
    flex-basis: 2.4rem;
    height: 2.4rem;
    flex-shrink: 0;
    flex-grow: 0;
    &:focus {
      color: hsl(var(--theme-300));
    }
  }
  &__Supporting {
    padding: 0 1.6rem;
    font-size: 1.4rem;
    color: hsl(var(--bg-400));
  }
}

@keyframes invalid {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-0.4rem);
  }
  50% {
    transform: translateX(0.4rem);
  }
  75% {
    transform: translateX(-0.2rem);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
