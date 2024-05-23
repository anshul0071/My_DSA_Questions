function removeDuplicates(arr) {
  let obj = {};
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    if (obj[ele]) {
      if (obj[ele] === 1) {
        res.push(ele);
        obj[ele]++;
      }
    } else {
      obj[ele] = 1;
    }
  }
  return [res, arr];
}

const output = removeDuplicates([
  1, 24, 3, 11, 1, 24, 1, 3, 444, 33, 222, 222, 33,
]);
console.log(output);

// TO_DO
