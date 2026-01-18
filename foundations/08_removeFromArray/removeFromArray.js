const removeFromArray = function(arr) {
    const args = Array.from(arguments);
    args.splice(0, 1);
    result = arr.filter((item) => !args.includes(item));
    return result
};

// Do not edit below this line
module.exports = removeFromArray;
