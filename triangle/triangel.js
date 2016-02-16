function triangle(a, b, c) {
    if (a + b <= c || b + c <= a || a + c <= b) {
        return 'Треугольника не существует';
    }
    var sum = Math.pow(a, 2) + Math.pow(b, 2);
    var otherSide = Math.pow(c, 2);
    if (sum === otherSide) {
        return 'Прямоугольный треугольник';
    } else if (sum > otherSide) {
        return 'Остроугольный треугольник';
    } else if (sum < otherSide) {
        return 'Тупоугольный треугольник';
    }
}

console.log(triangle(1, 2, 3));
console.log(triangle(1, 1, 1));
console.log(triangle(1, 4, 3));
console.log(triangle(3, 4, 5));
console.log(triangle(5, 5, 9));
