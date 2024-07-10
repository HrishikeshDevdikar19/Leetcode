/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    // Count the number of zeros to be duplicated
    let zerosToDuplicate = 0;
    let length = arr.length - 1;

    for (let i = 0; i <= length - zerosToDuplicate; i++) {
        if (arr[i] === 0) {
            if (i === length - zerosToDuplicate) {
                // Edge case: zero at the end which can't be duplicated
                arr[length] = 0;
                length -= 1;
                break;
            }
            zerosToDuplicate++;
       
        }
    }

    // Start from the end and move elements to their correct positions
     console.log("Count of Zeros:" + zerosToDuplicate)
    let last = length - zerosToDuplicate;
     console.log(last)
    for (let i = last; i >= 0; i--) {
        if (arr[i] === 0) {
            arr[i + zerosToDuplicate] = 0;
            zerosToDuplicate--;
            arr[i + zerosToDuplicate] = 0;
        } else {
            arr[i + zerosToDuplicate] = arr[i];
        }
    }
};