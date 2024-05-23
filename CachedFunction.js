function cachedFunction(fn) {
  let cache = {};
  return (...args) => {
    let key = args.join("");
    if(cache[key] !== undefined){
        return cache[key];
    }
    const res = fn(...args);
    cache[key] = res;
    console.log("object")
    return res;
  };
}

const sum = (a, b) => {
  return a ** b;
};
const res = cachedFunction(sum);
console.log(res(2, 33))
console.log(res(2, 33))

