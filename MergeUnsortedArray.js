const a = [1, 3, 5, 7, 8];
const b = [9, 3, 2];
// Expected result: [1, 2, 3, 3, 5, 7, 8, 9]
const merge = (a, b) => {
  let arr = [];
  for (let i = 0; i < a.length; i++) {
    arr.push(a[i]);
  }
  for (let i = 0; i < b.length; i++) {
    arr.push(b[i]);
  }
  for (let i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.log(arr, "Arr");
  return arr;
};
merge(a, b);


// time complexity  : O(n^2)
// space complexity : O(n+m)
