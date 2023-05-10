/*
Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.
A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.
If the length of the array is 0, it should return init.
Please solve it without using the built-in Array.reduce method.

Example:
Input: 
  nums = [1,2,3,4]
  fn = function sum(accum, curr) { return accum + curr; }
  init = 0
Output: 10

Input: 
  nums = [1,2,3,4]
  fn = function sum(accum, curr) { return accum + curr * curr; }
  init = 100
Output: 130

Input: 
  nums = []
  fn = function sum(accum, curr) { return 0; }
  init = 25
Output: 25

Constraints
  0 <= nums.length <= 1000
  0 <= nums[i] <= 1000
  0 <= init <= 1000
*/

type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
  let result = init;
  for (const num of nums) {
    result = fn(result, num);
  }
  return result;
}
