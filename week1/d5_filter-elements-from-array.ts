/*
Given an integer array arr and a filtering function fn, return a new array with a fewer or equal number of elements.
The returned array should only contain elements where fn(arr[i], i) evaluated to a truthy value.
Please solve it without the built-in Array.filter method.

Example:
Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
Output: [20,30]

Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
Output: [1]

Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
Output: [-2,0,1,2]
*/

const filter = (arr: number[], fn: (n: number, i: number) => any): number[] => {
  const result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    const isValid = !!fn(arr[i], i);
    if (isValid) {
      result.push(arr[i]);
    }
  }
  return result;
};
