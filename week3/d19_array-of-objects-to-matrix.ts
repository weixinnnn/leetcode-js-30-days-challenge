/*
Examples:
Input: 
  [
    {
      name: 'John',
      age: 25,
      address: {
        city: 'New York',
        country: 'USA'
      }
    },
    {
      name: 'Jane',
      age: 30,
      address: {
        city: 'London',
        country: 'UK'
      }
    }
  ]
Output: 
  [
    ['address.city', 'address.country', 'age', 'name'],
    ['New York', 'USA', 25, 'John'],
    ['London', 'UK', 30, 'Jane']
  ]
*/

const flatten = (
  obj: Record<string, any>,
  prefix: string[] = []
): Record<string, any> => {
  return Object.entries(obj).reduce((result, [key, value]) => {
    const currentKey = [...prefix, key].join(".");
    if (typeof value !== "object" || value === null) {
      return { ...result, [currentKey]: value };
    }
    return { ...result, ...flatten(value, [...prefix, key]) };
  }, {});
};

const jsonToMatrix = (arr: Record<string, any>[]): any[][] => {
  const flattenedArr = arr.map((item) => flatten(item));
  const keys = Object.keys(
    flattenedArr.reduce((result, item) => ({ ...result, ...item }), {})
  ).sort();
  return [
    keys,
    ...flattenedArr.map((item) => keys.map((key) => item[key] || "")),
  ];
};
