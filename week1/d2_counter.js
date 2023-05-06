/* 
Given an integer n, return a counter function. 
This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

Constraints:
-1000 <= n <= 1000
At most 1000 calls to counter() will be made
*/

/**
 * @param {number} n - Initial value of counter.
 * @return {Function} A function that returns the current value of the counter and increments it by 1.
 */
const createCounter = (n) => () => n++;
