const fibonacci = function(fibNum) {
    if(fibNum<=0){
        return "OOPS";
    }
    let currentFibNum = 1;
    for(let i = 1, j = 1, k = 2; k < fibNum;k++){
        currentFibNum = i+j;
        i = j;
        j = currentFibNum;
    }
    return currentFibNum;
};

// Do not edit below this line
module.exports = fibonacci;
