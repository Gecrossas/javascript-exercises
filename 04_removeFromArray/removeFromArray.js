const removeFromArray = function(arrayToRemoveFrom, ...args) {
    let result = arrayToRemoveFrom.filter(x => !args.includes(x));
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
