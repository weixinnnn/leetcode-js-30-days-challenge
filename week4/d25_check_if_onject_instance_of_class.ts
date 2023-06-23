/*
Examples:
  Input: new Date(), Date
  Output: true
*/
const checkIfInstanceOf = <T>(
  obj: unknown,
  classFunction: new (...args: any[]) => T
): boolean => {
  if (
    obj === null ||
    obj === undefined ||
    typeof classFunction !== "function"
  ) {
    return false;
  }

  let currPotentialPrototype = Object.getPrototypeOf(obj);
  while (currPotentialPrototype) {
    if (currPotentialPrototype === (classFunction as Function).prototype) {
      return true;
    }
    currPotentialPrototype = Object.getPrototypeOf(currPotentialPrototype);
  }

  return false;
};
