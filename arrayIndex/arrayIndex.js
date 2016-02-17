function remove(arr, indexes) {
    var newArray = Array.prototype.slice.call(arguments, 1);
    return arr.filter(function (item, index) {
        return newArray.indexOf(index) == -1;
    });
}

var numbers = [2, 7, 1, 5, 7, 2, 5, 6, 3, 4];
var strings = ['JS', 'is', 'not', 'awesome'];
var data = [{i: 1}, {i: 2}, {i: 3}, {i: 4}, {i: 5}];
var random = [undefined, 'str', null, 42, {data: data}];

console.log(remove(strings, 2)); // ['JS', 'is', 'awesome']
console.log(remove(numbers, 0, 2, 4)); // [7, 5, 2, 5, 6, 3, 4]
console.log(remove(data, 1, 3, 4)); // [{i: 1}, {i: 3}]
console.log(remove(random, 1, 3)); // [undefined, null, {data: [...]}]