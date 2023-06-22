/*
Examples:
Input: [1,2,3,4,5]
Output: {odd: [1,3,5], even: [2,4]}

Input: ['apple', 'orange', 'banana', 'pear', 'kiwi']
Output: {
  4: ["pear", "kiwi"],
  5: ["apple"],
  6: ["orange", "banana"]
}
*/

interface GroupedArray<T> {
  [key: string]: T[];
}

interface Array<T> {
  groupBy(fn: (item: T) => string): GroupedArray<T>;
}

Array.prototype.groupBy = function <T>(
  this: T[],
  fn: (item: T) => string
): GroupedArray<T> {
  return this.reduce((accum: GroupedArray<T>, item: T) => {
    const key = fn(item);
    accum[key] ||= [];
    accum[key].push(item);
    return accum;
  }, {});
};
