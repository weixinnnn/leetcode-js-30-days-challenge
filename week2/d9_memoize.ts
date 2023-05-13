/*
Given a function fn, return a memoized version of that function.
A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.
You can assume there are 3 possible input functions: sum, fib, and factorial.
  sum accepts two integers a and b and returns a + b.
  fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
  factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
*/

type Fn = (...params: any) => any;

function memoize(fn: Fn): Fn {
  const memoised = new Map();
  return function (...args) {
    /* 
      JSON.stringify is needed to serialize the args array into a string.
      When you use memoised.has(args), you are checking if the memoised map has a key that is the args array object itself. 
      Since Map keys are compared using strict equality (===), 
      this check will always return false because a new array is created every time the memoized function is called, 
      even if the elements in the array are the same.
    */
    const key = JSON.stringify(args);
    if (memoised.has(key)) {
      return memoised.get(key);
    }
    const result = fn(...args);
    memoised.set(key, result);
    return result;
  };
}
