<script lang="ts" setup>
import EuphoHeader from "@/components/EuphoHeader.vue";
</script>

<template>
  <div class="Common">
    <EuphoHeader class="Common__Header" />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.Common {
  padding: 6.4rem 0 0;
  &__Header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--z-header);
    width: 100%;
  }
}
</style>
