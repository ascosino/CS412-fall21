function reverseAlphabeticalOrder(inputString) {
    return inputString.split("").reverse().join("").match(/[a-zA-Z]+/g);
}

console.log(reverseAlphabeticalOrder('supercalifragilisticexpialidocious'));