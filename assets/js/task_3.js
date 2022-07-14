// Напишите функцию, которая принимает число как аргумент и возвращает функцию,
// которая также принимает число как аргумент и возвращает сумму этих двух чисел.
// Выведите в консоль результат.

function getNumber (num) {
    return function (other_num) {
        return num + other_num;
    }
}

console.log(getNumber(5)(10)); //15

const func = getNumber(8);
console.log(func(12)); //20