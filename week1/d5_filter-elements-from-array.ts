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
