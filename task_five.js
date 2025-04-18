//Є масив чисел. Потрібно повернути новий масив, 
//у якому залишаються лише ті числа, які: більші за середнє значення всіх чисел у масиві і при цьому парні.

const numbers = [4, 10, 15, 20, 2, 8];

function filterNumbers(numbers) {

    const sortedArray = [];
    let averageNumber = 0;

    for (let number of numbers) {
        averageNumber += number;
    }

    for (let number of numbers) {

        if(number > averageNumber/numbers.length && number % 2 === 0) {
            
            sortedArray.push(number)
        }
    }

    return sortedArray;
}

console.log(filterNumbers(numbers));

//Є масив слів. Потрібно знайти найдовше слово та повернути його. Якщо кілька слів однакової довжини - поверни перше з них.

const words = ['apple', 'banana', 'grapefruit', 'kiwi', 'peach'];

function findLongestWord(words) {

    let theLongestWord = '';

    for (let word of words) {

        if(word.length > theLongestWord.length) {
            theLongestWord = word;
        }
    }

    return theLongestWord;

}

console.log(findLongestWord(words));