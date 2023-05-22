/*
Given two objects o1 and o2, check if they are deeply equal.
For two objects to be deeply equal, they must contain the same keys, and the associated values must also be deeply equal. 
Two objects are also considered deeply equal if they pass the === equality check.
You may assume both objects are the output of JSON.parse. In other words, they are valid JSON.
Please solve it without using lodash's _.isEqual() function.
*/

const areDeeplyEqual = (o1: any, o2: any): boolean => {
  // Shallow equality
  if (o1 === o2) return true;

  // Check are both object type
  if (!(typeof o1 === "object" && typeof o2 === "object")) return false;

  // Check are both null
  if ((o1 === null || o2 === null) && o1 !== o2) return false;

  // Check are both array
  if (Array.isArray(o1) !== Array.isArray(o2)) return false;

  const keys1 = Object.keys(o1);
  const keys2 = Object.keys(o2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!areDeeplyEqual(o1[key], o2[key])) {
      return false;
    }
  }

  return true;
};
