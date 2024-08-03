import { onUnmounted, reactive } from "vue";
import { useDigit } from "./format";

export function useLandingCopy() {
  const now = new Date();
  //get am/pm
  const hours = now.getHours();
  if (hours <= 10) {
    return '오늘도 힘찬 하루 보내세요!';
  }
  if (hours <= 13) {
    return '식사 맛있게 하세요!';
  }
  if (hours <= 18) {
    return '곧 퇴근이니 화이팅하세요!'
  }
  return '열일하세요!'
}


export function useTime() {
  const time = reactive({ hh: "00", mm: "00", ss: "00" });
  setTime();
  const interval = setInterval(setTime, 1000);
  function setTime() {
    const now = new Date();
    time.hh = useDigit(now.getHours());
    time.mm = useDigit(now.getMinutes());
    time.ss = useDigit(now.getSeconds());
  }

  function stop() {
    interval && clearInterval(interval);
  }

  onUnmounted(stop);
  return { time, stop };
}