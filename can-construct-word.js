"use strict";

/** takes a word and a string of letters, returns true/false based on if word can be made from letters */
function canConstructWord(word, letters) {
    let counter = makeCounter(letters);


//TODO if(!letter in counter)
    for(let letter of word){
        if(!counter[letter]){
            return false;
        }
        counter[letter]--;
        if(counter[letter] === 0){
            delete counter[letter];
        }
        
    }
    return true;
}

/**Takes a string, creates and returns an object containing the counts for each character */
function makeCounter(word){
    let letterCounter = {};
    for(let char of word){
        let charCount = letterCounter[char] || 0;
        letterCounter[char] = charCount + 1;
    }
    console.log(letterCounter);
    return letterCounter;

}
