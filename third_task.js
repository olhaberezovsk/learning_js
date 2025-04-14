//У тебе є масив чисел. Напиши функцію, яка повертає суму тільки парних чисел

const numbers = [1, 2, 3, 4, 5, 6];

function evenNumbersSum(numbers) {

    let evenSum = 0;

    for (let number of numbers) {
        if (number % 2 === 0) {
            evenSum += number;
        }
    }

    return evenSum;
}

console.log(evenNumbersSum(numbers));

//Є масив чисел. Потрібно повернути новий масив, в якому будуть лише ті числа, що більші за середнє арифметичне всіх чисел у початковому масиві. 

const numbersArray = [10, 20, 30, 40, 50];

function aboveAverage(numbersArray) {

    const averageArray = [];
    let sumNumber = 0;

    for (let number of numbersArray) {

        sumNumber += number;

    }

    for (let number of numbersArray) {
        
        if(number > sumNumber/numbersArray.length) {
            averageArray.push(number)
        }
    }

    return averageArray;

}

console.log(aboveAverage(numbersArray));