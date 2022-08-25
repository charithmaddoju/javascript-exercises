const sumAll = function(firstNumber,lastNumber) {
    
    let sum = 0;
    if(firstNumber < 0 || lastNumber < 0 || typeof firstNumber !== "number" || typeof lastNumber !== "number") {
        return 'ERROR';
    }
    if(firstNumber >= lastNumber){
        let temp = firstNumber;
        firstNumber = lastNumber;
        lastNumber = temp;
    }
    for(let i = firstNumber ; i<= lastNumber ; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
