const leapYears = function(yearInput) {
    if(yearInput%4 == 0){
        if(yearInput%400 == 0){
            return true;
        }else if(yearInput%100 == 0){
            return false;
        }else{
            return true;
        }
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
