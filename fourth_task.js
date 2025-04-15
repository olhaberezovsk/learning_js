//У тебе є масив чисел. Поверни новий масив, у якому будуть лише ті числа, які більше середнього арифметичного та парні.

const numbers = [3, 10, 15, 8, 2, 12];

function pairNumbers(numbers) {

    const sortedArray = [];
    let averageArray = 0;

    for (let number of numbers) {

        averageArray += number;

    }

    for (let number of numbers) {
        if (number > averageArray/numbers.length && number % 2 === 0) {
            sortedArray.push(number)
        }
    }

    return sortedArray;

} 

console.log(pairNumbers(numbers));