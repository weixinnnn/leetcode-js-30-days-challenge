/*
Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.

Examples:
Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
Output: 
  const onceFn = once(fn);
  onceFn(1, 2, 3); // 6
  onceFn(2, 3, 6); // undefined, fn was not called
*/

const once = <T extends (...args: unknown[]) => any>(
  fn: T
): ((...args: Parameters<T>) => ReturnType<T> | undefined) => {
  let called = false;
  return function (...args) {
    if (called) return;
    called = true;
    return fn(...args);
  };
};
