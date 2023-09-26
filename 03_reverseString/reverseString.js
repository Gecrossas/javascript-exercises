const reverseString = function(stringToReverse) {
    let arrayFromString = stringToReverse.split("");
    arrayFromString.reverse();
    let output = arrayFromString.toString().replaceAll(",", "");
    return output;
};

// Do not edit below this line
module.exports = reverseString;
