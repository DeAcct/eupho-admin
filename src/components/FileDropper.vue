<script lang="ts" setup>
import { ref } from "vue";
import { useMediaQuery } from "@/composables/device";

const viewport = useMediaQuery("(hover: hover) and (pointer: fine)");
const file = ref<File | null>(null);
function onFileChange(e: Event) {
  const target = e.target as HTMLInputElement;
  const files = target.files;
  if (files && files.length) {
    file.value = files[0];
    console.log(file.value, file.value.name);
  }
}
async function parseFile() {}
</script>

<template>
  <label class="FileDropper">
    <h2 class="FileDropper__Title">새 프로젝트 생성</h2>
    <p class="FileDropper__Description">
      {{
        viewport
          ? "여기를 눌러 프로젝트 파일을 선택하거나 끌어서 놓으세요"
          : "프로젝트 파일을 선택하세요"
      }}
    </p>
    <input
      type="file"
      class="blind"
      @change="onFileChange"
      accept="application/json"
    />
  </label>
</template>

<style lang="scss" scoped>
.FileDropper {
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  height: 16rem;
  cursor: pointer;
  &__Title {
    font-size: 1.6rem;
    font-weight: 900;
  }
  &__Description {
    margin-top: auto;
    font-size: 1.2rem;
  }
}
</style>
