const fibonacci = function(index) {
    const stringToNumber = Number(index);

    if (stringToNumber < 0) {
        return "OOPS"
    } else if (stringToNumber == 0) {
        return 0;
    } else if (stringToNumber == 1) {
        return 1;
    } else {
        let prevNum = 0;
        let currNum = 1;
        for (let i = 2; i <= stringToNumber; i++) {
            tempNum = prevNum + currNum;
            prevNum = currNum;
            currNum = tempNum;
        }
        return currNum;
    }
};

// Do not edit below this line
module.exports = fibonacci;
