function countWords(str,word) {
    const arr = str.split(' ')
    const count = arr.filter((ele)=> ele.toLowerCase()===word.toLowerCase()).length;
    return count;
}
let res = countWords("Ram is a good Ram RAM","is");
console.log(res)
