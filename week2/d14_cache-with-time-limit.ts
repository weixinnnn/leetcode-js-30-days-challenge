/*
Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

The class has three public methods:
set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.
get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.
count(): returns the count of un-expired keys.
*/

class TimeLimitedCache {
  running: Map<
    number,
    { value: number; timeout: ReturnType<typeof setTimeout> }
  >;

  constructor() {
    this.running = new Map();
  }

  set(key: number, value: number, duration: number): boolean {
    const hasExisting = this.running.has(key);
    if (hasExisting) {
      clearTimeout(this.running.get(key)!.timeout);
    }

    this.running.set(key, { value, timeout: this.run(key, duration) });
    return hasExisting;
  }

  get(key: number): number {
    return this.running.get(key)?.value ?? -1;
  }

  count(): number {
    return this.running.size;
  }

  run(key: number, duration: number) {
    return setTimeout(() => {
      this.running.delete(key);
    }, duration);
  }
}
