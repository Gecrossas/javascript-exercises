const sumAll = function(numOne, numTwo) {
    if(typeof numOne !== "number" || typeof numTwo !== "number") return "ERROR";
    if(numOne < 0 || numTwo < 0) return "ERROR";
    
    let finalSum = 0;
    let smallerNumber = (numOne < numTwo) ? numOne : numTwo;
    let biggerNumber = (numOne < numTwo) ? numTwo : numOne;

    while (true){
        if(smallerNumber > biggerNumber) return finalSum;
        finalSum += smallerNumber;
        smallerNumber++;
    }
};

// Do not edit below this line
module.exports = sumAll;
