function doubleNumWithRegExp(num) {
    return /^([0-9]+)\1$/.test(num.toString()) ? num : num * 2;
}

function doubleNum(num) {
    var numStr = num.toString(),
        half = numStr.slice(numStr.length / 2);
    return (half + half === numStr) ? num : num * 2;
}

console.log(doubleNum(1));
console.log(doubleNum(11));

console.log(doubleNumWithRegExp(1));
console.log(doubleNumWithRegExp(11));