//Напиши функцію, яка приймає масив чисел та повертає масив чисел з унікальними значеннями (без повторів).

const numbers = [1, 2 ,2, 3, 4, 4, 5];

function uniqueArray(numbers) {

    const sortedNumbers = [];

    for (let number of numbers) {
        if(!sortedNumbers.includes(number)) {
            sortedNumbers.push(number)
        }
    }

    return sortedNumbers;
}

console.log(uniqueArray(numbers));

//варіант з Set

function uniqueArraySet(numbers) {

    return [...new Set (numbers)]

}

console.log(uniqueArraySet(numbers));

//Напиши функцію groupWordsByLength, яка приймає масив слів і повертає об'єкт, де ключ - це довжина слова, а значення - масив усіх слів такої довжини.

const words = ['cat', 'lion', 'dog', 'tiger', 'ant', 'panther']

function groupWordsByLength(words) {

    const sortedList = {};

    for (let word of words) {
        
        const length = word.length;

        if(sortedList[length]) {
            sortedList[length].push(word);
        } else {
            sortedList[length] = [word];
        }
}

    return sortedList;
}

console.log(groupWordsByLength(words));