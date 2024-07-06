/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    var count = 0
   
    for (i=0; i<nums.length; i++){
        
        if(String(nums[i]).length % 2 == 0){
            console.log("Yes, its even")
            count++
        }else{
            console.log("No, its odd")
        }
    } return count
};