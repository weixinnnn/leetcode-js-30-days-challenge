interface Array<T> {
  last(): T | -1;
}

Array.prototype.last = function <T>(): T | -1 {
  return this.at(-1) ?? -1;
};
