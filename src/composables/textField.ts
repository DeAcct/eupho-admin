import { ref } from "vue";

export default function useTextField() {
  const value = ref("");
  function update(event: Event) {
    value.value = (event.target as HTMLInputElement).value;
  }
  function clear() {
    value.value = "";
  }

  return { value, update, clear }
}