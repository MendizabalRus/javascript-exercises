const removeFromArray = function(array, ...remove) {
    return array.filter(elemento => !remove.includes(elemento));
}

// Do not edit below this line
module.exports = removeFromArray;
