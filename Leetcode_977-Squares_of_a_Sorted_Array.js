/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {    
    var squares = []
    for(i=0; i<nums.length; i++){
        squares[i] = nums[i]**2
    }
  return squares.sort(function(a, b){return a - b});  
};