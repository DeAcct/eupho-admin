<template>
  <span class="LoadLine">
    <span class="LoadLine__Track">
      <span class="LoadLine__Line"></span>
    </span>
  </span>
</template>

<style lang="scss" scoped>
.LoadLine {
  display: flex;
  width: 100%;
  height: 0.4rem;
  overflow: hidden;
  &__Track {
    display: flex;
    flex-grow: 1;
    position: relative;
  }
  &__Line {
    position: absolute;
    inset: 0;
    background-color: hsl(var(--theme-500));
    animation: load-animation 1.2s infinite ease-in-out;
    transform-origin: left;
  }
}

@keyframes load-animation {
  from {
    scale: 0 1 0;
    translate: -100% 0;
  }
  to {
    scale: 1 1 1;
    translate: 100% 0;
  }
}
</style>
