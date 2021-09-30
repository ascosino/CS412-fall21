function decorateStr (inputString, decorator) {
    return decorator(inputString);
}

let exp = "supercalifragilisticexpialidocious";

console.log(decorateStr(exp, x => x.split(/(?=[c\[\]])/gi)));
console.log(decorateStr(exp, y => y.replaceAll("a", "A")));

console.log(
    "{\n",
    "original string:", exp, "\n",
    "modified string:", exp.replaceAll("a", "A"), "\n",
    "number replaced:", (exp.match(/a/g) || []).length, "\n",
    "length:", exp.length, "\n}",);