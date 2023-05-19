type Fn = (...p: any[]) => any;

const debounce = (fn: Fn, t: number): Fn => {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), t);
  };
};
