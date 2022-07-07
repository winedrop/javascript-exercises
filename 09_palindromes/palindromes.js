const palindromes = function (string) {
    let stringInput = string;
    stringInput = stringInput.toLowerCase();
    let forwardString = "";
    let reverseString = "";
    for (let i = 0; i < stringInput.length; i++) {
        let currentChar = stringInput.charAt(i);
        if (currentChar >= 'a' && currentChar <= 'z') {
            forwardString = forwardString.concat(currentChar);
            reverseString = currentChar.concat(reverseString);
        }
    }
    return forwardString == reverseString;

};

// Do not edit below this line
module.exports = palindromes;
