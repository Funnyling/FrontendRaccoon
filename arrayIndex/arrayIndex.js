function remove(arr, indexes) {
    var newArray = Array.prototype.slice.call(arguments, 1);
    return arr.filter(function (item, index) {
        return newArray.indexOf(index) == -1;
    });
}

/*
 * Complex O(m+nlog(n)), n - amount of indexes
 */
function _remove(arr) {
    var result = [];
    var indexes = Array.prototype.slice.call(arguments, 1);
    var i, j = 0, length;

    indexes.sort();

    for (i = 0, length = arr.length; i < length; i++) {
        if (i !== indexes[j]) {
            result.push(arr[i]);
        } else {
            j++;
        }
    }
    return result;
}

/*
 * Complex O(m*n), n - amount of indexes
 */
function __remove(arr) {
    var result = [];
    var indexes = Array.prototype.slice.call(arguments, 1);
    var i, length;

    indexes.sort();

    for (i = 0, length = arr.length; i < length; i++) {
        if (indexes.indexOf(i) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}

var numbers = [2, 7, 1, 5, 7, 2, 5, 6, 3, 4];
var strings = ['JS', 'is', 'not', 'awesome'];
var data = [{i: 1}, {i: 2}, {i: 3}, {i: 4}, {i: 5}];
var random = [undefined, 'str', null, 42, {data: data}];

console.log(remove(strings, 2)); // ['JS', 'is', 'awesome']
console.log(remove(numbers, 0, 2, 4)); // [7, 5, 2, 5, 6, 3, 4]
console.log(remove(data, 1, 3, 4)); // [{i: 1}, {i: 3}]
console.log(remove(random, 1, 3)); // [undefined, null, {data: [...]}]

numbers = [2, 7, 1, 5, 7, 2, 5, 6, 3, 4, 8, 9, 6, 2, 1, 3, 4, 5, 6, 7];

console.time('remove');
remove(numbers, 0, 2, 4, 7, 9, 11, 15);
console.timeEnd('remove');

numbers = [2, 7, 1, 5, 7, 2, 5, 6, 3, 4, 8, 9, 6, 2, 1, 3, 4, 5, 6, 7];

console.time('_remove');
_remove(numbers, 0, 2, 4, 7, 9, 11, 15);
console.timeEnd('_remove');

numbers = [2, 7, 1, 5, 7, 2, 5, 6, 3, 4, 8, 9, 6, 2, 1, 3, 4, 5, 6, 7];

console.time('__remove');
__remove(numbers, 0, 2, 4, 7, 9, 11, 15);
console.timeEnd('__remove');