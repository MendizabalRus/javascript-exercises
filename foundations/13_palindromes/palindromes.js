const palindromes = function (string) {
   const alphanumeric = "abcdefghijklmnopqrstuwxyz0123456789";

    const cleanString = string
    .toLowerCase()
    .split("")
    .filter((character) => alphanumeric.includes(character))
    .join("");

    const reverseString = cleanString
    .split("")
    .reverse()
    .join("");

    console.log(cleanString);
    console.log(reverseString);

    if (cleanString === reverseString) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
