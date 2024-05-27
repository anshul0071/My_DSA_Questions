function BinarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
}
let res = BinarySearch([1, 2, 3, 4, 5, 6], 6);
console.log(res);
