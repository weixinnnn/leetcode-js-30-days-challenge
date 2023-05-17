/*
Given an asyncronous function fn and a time t in milliseconds, return a new time limited version of the input function.
A time limited function is a function that is identical to the original unless it takes longer than t milliseconds to fullfill. 
In that case, it will reject with "Time Limit Exceeded".  
Note that it should reject with a string, not an Error.
*/

type Fn = (...params: any[]) => Promise<any>;

const timeLimit = (fn: Fn, t: number): Fn => {
  return async (...args) => {
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject("Time Limit Exceeded"), t);
    });

    const result = await Promise.race([timeoutPromise, fn(...args)]);
    return result;
  };
};
