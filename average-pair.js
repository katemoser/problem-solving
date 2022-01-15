"use strict";

// add whatever parameters you deem necessary
function averagePair(nums, targetAvg) {
    let left = 0;
    let right = nums.length - 1;
    console.log(`left = ${left}, right = ${right}`)

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
