/*
Given an array of ints, return true if the array contains a 2 next to a 2 somewhere.

has22([1, 2, 2]) → true
has22([1, 2, 1, 2]) → false
has22([2, 1, 2]) → false
*/

function has22(nums) {
    var numArray = [];
    numArray = nums;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] === 2 && numArray[i + 1] ===2) {
            return true; 
        }
    }
    return false; 
}

//function has22(nums) {
//    return /22/.test(nums.join("")); 
//}

console.log(has22([1, 2, 3]));
console.log(has22([1, 2, 2]));
console.log(has22([2, 2, 1]));
console.log(has22([2, 2, 1]));
console.log(has22([2, 2, 1]));