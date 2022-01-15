"use strict";

/**takes a sorted array of numbers and a target num, 
returns true if a pair exists in array that averages to target */
function averagePair(nums, targetAvg) {
    let left = 0;
    let right = nums.length - 1;
    console.log(`left = ${left}, right = ${right}`)

    //TODO: Change sum and avg to const

    while (left < right) {
        let sum = nums[left] + nums[right];
        let avg = sum / 2;
        if (avg === targetAvg) {
            return true;
        } else if (avg > targetAvg) {
            right--;
        } else {
            left++;
        }
    }
    return false;
}
