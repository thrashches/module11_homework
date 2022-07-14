// Напишите функцию, которая принимает на входе любое число(но не больше 1 000), 
// определяет, является ли оно простым, и выводит, простое число или нет.Если 
// введено больше 1 000, то выводится сообщение, что данные неверны.Обратите внимание на числа 0 и 1.

function isSimple(num) {
    if (num < 1000) {
        for (let i = 2; i < Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    }
    else {
        return 'Wrong data!'
    }
}

console.log(isSimple(1)); //false
console.log(isSimple(0)); //false
console.log(isSimple(5)); //true
console.log(isSimple(7)); //true
console.log(isSimple(1200)); //Wrong data!
console.log(isSimple(201)); //false