function parse(inputString) {
    return inputString.split("");
}

function evaluate (inputString) {
    let strToArr = parse(inputString);
    let left = parseInt(strToArr[0]);
    let right = parseInt(strToArr[2]);
    if (strToArr[1] == '+') { return (left + right) };
    if (strToArr[1] == '-') { return (left - right) };
    if (strToArr[1] == '*') { return (left * right) };
    if (strToArr[1] == '/') { return (left / right) };
    if (strToArr[1] == '^') { return (left ^ right) };
}

console.log('4+2 =', evaluate('4+2'));
console.log('5*7 =', evaluate('5*7'));
console.log('6-1 =', evaluate('6-1'));
console.log('9/2 =', evaluate('9/2'));
console.log('2^8 =', evaluate('2^8'));