const sumAll = function (lowerbound, upperbound) {
    if (lowerbound < 0) {
        return "ERROR";
    } if (typeof (lowerbound) === "number" && typeof (upperbound) === "number") {
        let currentSum = 0;
        if (lowerbound > upperbound) {
            let temp = lowerbound;
            lowerbound = upperbound;
            upperbound = temp;
        }
        for (let i = lowerbound; i <= upperbound; i++) {
            currentSum += i;
        }
        return currentSum;
    }
    return "ERROR";

};

// Do not edit below this line
module.exports = sumAll;
