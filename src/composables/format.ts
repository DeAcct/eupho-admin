export type TimeCrumb = `0${number}` | `${number}${number}`
export function useDigit(origin: number, digits = 10): TimeCrumb {
  let result = String(origin);
  for (let i = digits; i >= 10; i /= 10) {
    if (origin < i) {
      result = `0${result}`;
    } else {
      return result as TimeCrumb;
    }
  }
  return result as TimeCrumb;
}