<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title><slot name="title"></slot></title>
    <slot name="icon"></slot>
  </svg>
</template>

<style lang="scss" scoped>
svg {
  color: inherit;
  fill: currentColor;
  transition: 150ms ease-out;
}
</style>
