function Reverse(str) {
  let res = "";
  for (let i = (str.length)- 1; i >=0; i--) {
    res += str[i];
  }
  if (str === res) return "Palindrome";
  else return "Not a palindrome"
}
const result = Reverse("FUFssssaaFUF");
console.log(result);
