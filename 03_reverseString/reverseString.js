const reverseString = function(inputString) {
    let reversedString = "";
    for(let i = inputString.length; i >= 0; i--){
        reversedString = reversedString.concat(inputString.substring(i, i -1));
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
