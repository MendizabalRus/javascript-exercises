const sumAll = function(x, y) {

    if (x < 0 || y <0)
        return "ERROR"

    else if (!Number.isInteger(x) || !Number.isInteger(y))
        return "ERROR"

    else if (typeof(x) != "number" || typeof(y) != "number")
        return "ERROR"
    
    else if (Array.isArray(x) || Array.isArray(y))
        return "ERROR"
    
    else {
        let sum = 0;
        for (let i = Math.min(x, y); i <= Math.max(x, y); i++) {
        sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
