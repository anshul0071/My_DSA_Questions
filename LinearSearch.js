function LinearSearch(arr,target){
    for(let i =0;i <arr.length;i++){
        if(arr[i]===target){
            return i+1;
        }
    }
    return "Not found"
}
let result = LinearSearch([1,43,5,3,455,6],6);
console.log(result);