const repeatString = function(str, num) {
    if (num < 0) {
        return 'ERROR'
    }

    let current = ''
    for (let i =0; i < num; i++) {
        current += str
    }
    return current
};

// Do not edit below this line
module.exports = repeatString;
