/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var len = nums.length
    var count = 0
    var result = [] 

    for (i=0; i<len; i++) {
        if(nums[i] === 1){
            count++
         continue
        }   else {
            result.push(count)
            count=0
            continue
        }  
          console.log("result for iteration" + i+ " is : " + count)   

    } 
    
    result.push(count) 
    console.log("result is : " + result)
    return Math.max(...result)
   
};
