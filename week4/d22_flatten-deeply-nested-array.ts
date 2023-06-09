/*
Example:
Input: [1, [2, [3, 4,[5, 6, 7]]]]
Output: [1, 2, 3, 4, [5, 6, 7]] 
*/
const flattenArray = <T>(arr: T[], depth: number): T[] => {
  const result: T[] = [];

  const flatten = (nestedArray: T[], currentDepth: number) => {
    for (const element of nestedArray) {
      if (Array.isArray(element) && currentDepth > 0 && currentDepth <= depth) {
        flatten(element, currentDepth - 1);
      } else {
        result.push(element);
      }
    }
  };

  flatten(arr, depth);
  return result;
};
