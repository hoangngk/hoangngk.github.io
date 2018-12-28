const convertNumberToDigitsArray = (source) => {
    return ('' + source).split('').map(function(digit) {return Number(digit);});
}

console.log(convertNumberToDigitsArray(12345));