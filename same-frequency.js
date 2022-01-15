"use strict"
// add whatever parameters you deem necessary

/**
 * takes in two numbers, returns whether each number's digit frequency is the same 
 *
 */
function sameFrequency(num1, num2) {
    const str1 = num1.toString();
    const str2 = num2.toString();
    const obj = {};

    for (let i = 0; i < str1.length; i++) {
        if (str1[i] in obj) {
            obj[str1[i]]++;
        } else {
            obj[str1[i]] = 1;
        }
    }

    for (let i = 0; i < str2.length; i++) {
        if (str2[i] in obj) {
            obj[str2[i]]--;
            if (obj[str2[i]] === 0) {
                delete obj[str2[i]];
            }
        } else {
            return false;
        }
        console.log(obj);
    }
}
