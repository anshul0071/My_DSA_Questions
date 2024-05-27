function FirstDuplicate(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] !== undefined) {
      return str[i];
    } else {
      obj[str[i]] = 1;
    }
  }
}
let res = FirstDuplicate("BABSSDFAFFA");
console.log(res);



// Alternative Way :

// function FirstDuplicate(str) {
//     let seen = new Set();
//     for (let i = 0; i < str.length; i++) {
//       if (seen.has(str[i])) {
//         return str[i];
//       }
//       seen.add(str[i]);
//     }
//     return "No duplicates";
//   }
  
//   let res = FirstDuplicate("ASSDFAFFA");
//   console.log(res);
  