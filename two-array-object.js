"use strict"

/**takes two arrays, returns object with key:value pairs */
function twoArrayObject(keys, values) {
    let obj = {};
    for(let i = 0; i < keys.length; i++){
        obj[keys[i]] = values[i] || null;

        //TODO use ternery statement/ if else
        //This is too casual!
    }
    console.log(obj);
    return obj;
}
