const repeatString = function(wordProvided, timesRepeated) {
    if(timesRepeated < 0){
        return "ERROR";
    }
    let combinedString = "";
    for(let i = 0; i < timesRepeated; i++){
        combinedString = combinedString.concat(wordProvided);
    }
    return combinedString;
};

// Do not edit below this line
module.exports = repeatString;
