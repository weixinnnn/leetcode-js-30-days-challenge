/*
Examples:
Input: 
  obj1 = { a: 1, b: 2 }
  obj2 = { a: 1, b: 3 }
Output: 
  { "b": [2, 3] } 

Input: 
  obj1 = { a: 1, b: { c: 2 } }
  obj2 = { a: 1, b: { c: 3 } }
Output: 
  { "b": { 
      "c": [2, 3] 
    } 
  } 
*/

const objectDiff = (obj1: any, obj2: any) => {
  if (obj1 === obj2) {
    return {};
  }
  if (obj1 === null || obj2 === null) {
    return [obj1, obj2];
  }
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    return [obj1, obj2];
  }
  if (Array.isArray(obj1) !== Array.isArray(obj2)) {
    return [obj1, obj2];
  }

  const returnObject: any = {};
  for (const key in obj1) {
    if (key in obj2) {
      const subDiff = objectDiff(obj1[key], obj2[key]);
      if (Object.keys(subDiff).length > 0) {
        returnObject[key] = subDiff;
      }
    }
  }
  return returnObject;
};
