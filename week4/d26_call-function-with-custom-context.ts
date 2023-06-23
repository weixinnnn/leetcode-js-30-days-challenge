interface Function {
  callPolyfill<T, A extends any[], R>(
    this: (this: T, ...args: A) => R,
    context: T,
    ...args: A
  ): R;
}

Function.prototype.callPolyfill = function <T, A extends any[], R>(
  this: (this: T, ...args: A) => R,
  context: T,
  ...args: A
): R {
  return this.apply(context, args);
};

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */
