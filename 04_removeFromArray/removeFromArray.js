const removeFromArray = function(numberArray, ...toBeRemoved) {
    return numberArray.filter(x => !toBeRemoved.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
