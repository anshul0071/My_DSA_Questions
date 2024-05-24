
// Brute force approach :  time complexity : O(n)

function twoSum(arr,target){
    for(let i = 0 ; i <arr.length ;i++){
        for(j=i+1 ; j <arr.length; j++){
            if((arr[i] + arr[j]) === target){
                return [i,j]
            }

        }
    }
}
const result = twoSum([1,2,3,6],5);
console.log(result)

// *****************************************************************************************************************************************************************

// Optimal approach : time complexity : O(n^2)

function twoSumOptimal(arr,target){
    let obj = {};
    for(let i = 0; i< arr.length;i++){
        let ele = obj[i];
        if(obj[target-ele] >=0){
            return [obj[target-ele],i]
        }else{
            obj[ele] = i;
        }
    }
}

const result1 = twoSum([1,2,3,6],5);
