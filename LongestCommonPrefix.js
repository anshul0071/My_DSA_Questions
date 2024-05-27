// Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string ""
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

function longestCommonPrefix(arr) {
  if (arr.length === 0) return "";

  let str = arr[0];

  for (let i = 1; i < arr.length; i++) {
    while (arr[i].indexOf(str) !== 0) {
      console.log(`Current prefix: ${str}, comparing with: ${arr[i]}`);

      str = str.slice(0, str.length - 1);
      if (str === "") return "";
    }
  }

  return str;
}
const str = ["flower", "flow", "flight","fluper"];
console.log(longestCommonPrefix(str)); // Output: "fl"

console.log("flight".indexOf("gh"));

