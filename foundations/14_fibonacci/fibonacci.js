const fibonacci = function(num) { 
    if (num == 0) {
        return 0;
    } else if (num < 0) {
        return 'OOPS';
    }

    prev1 = 1
    prev2 = 1
    current = 1
    for (let i = 2; i < num; i++) {
       current = prev1 + prev2
       prev2 = current
       prev1 = current - prev1 
    }
    return current
};

// Do not edit below this line
module.exports = fibonacci;
