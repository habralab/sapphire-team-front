export function debounce<T extends (...args: unknown[]) => void>(
  callback: T,
  delay: number,
) {
  let timer: NodeJS.Timeout | null = null;
  return (...args: unknown[]) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
