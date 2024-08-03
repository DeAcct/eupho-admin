import { useEventListener } from "@vueuse/core";
import { reactive, ref } from "vue";

export function useMediaQuery(queryString: string) {
  const query = matchMedia(queryString);
  const match = ref(query.matches);
  useEventListener(query, "change", ({ matches }: MediaQueryList) => {
    match.value = matches;
  });
  return match;
}

export function useViewport() {
  const viewportBase = reactive({
    vw: window.innerWidth / 100,
    vh: window.innerHeight / 100,
  });
  function setViewport() {
    viewportBase.vw = window.innerWidth / 100;
    viewportBase.vh = window.innerHeight / 100;
  }
  useEventListener(window, "resize", setViewport);

  return { viewportBase };
}
