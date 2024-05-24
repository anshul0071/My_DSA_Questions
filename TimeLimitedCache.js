// Here's an outline of the Time Limited Cache class and its methods:

// set(key, value, duration): Accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same unexpired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

// get(key): If an unexpired key exists, it should return the associated value. Otherwise, it should return -1.

// count(): Returns the count of unexpired keys.

class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }

  set(key, value, duration) {
    const currentTime = Date.now();
    const expiryTime = currentTime + duration;

    if (this.cache.has(key)) {
      const existingEntry = this.cache.get(key);
      if (existingEntry.expiryTime > currentTime) {
        clearTimeout(existingEntry.timeoutId);
        this.cache.set(key, {
          value,
          expiryTime,
          timeoutId: this.setExpiry(key, duration),
        });
        return true;
      }
    }

    this.cache.set(key, {
      value,
      expiryTime,
      timeoutId: this.setExpiry(key, duration),
    });
    return false;
  }

  get(key) {
    const currentTime = Date.now();

    if (this.cache.has(key)) {
      const entry = this.cache.get(key);
      if (entry.expiryTime > currentTime) {
        return entry.value;
      }
    }
    return -1;
  }

  count() {
    const currentTime = Date.now();
    let count = 0;

    for (const [key, entry] of this.cache.entries()) {
      if (entry.expiryTime > currentTime) {
        count++;
      } else {
        this.cache.delete(key);
      }
    }

    return count;
  }

  setExpiry(key, duration) {
    return setTimeout(() => {
      this.cache.delete(key);
    }, duration);
  }
}

// Example usage:
const cache = new TimeLimitedCache();
console.log(cache.set(1, 42, 1000)); // returns false
console.log(cache.get(1)); // returns 42
console.log(cache.count()); // returns 1
// setTimeout(() => {
//     console.log(cache.get(1)); // returns -1 after 1 second
//     console.log(cache.count()); // returns 0 after 1 second
// }, 1100);
