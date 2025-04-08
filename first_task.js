//Напиши функцію countUniqueWords(text), яка приймає рядок text і повертає об'єкт, де ключ - це унікальне слово, 
//а значення - кількість разів, скільки воно зустрічається 

function countUniqueWords(text) {

    const modifiedText = text.toLowerCase().replace(/!?,./g , '');
    const textToWords = modifiedText.split(' ');
    const wordsCounter = {};

    for (let word of textToWords) {
        if (wordsCounter[word]) {
            wordsCounter[word] += 1;
        } else {
            wordsCounter[word] = 1;
        }
    }

    return wordsCounter;

}

console.log(countUniqueWords('Text text for example to test the function'));

//Є масив об'єктів - список людей. Треба згрупувати їх по віку. Поверни об'єкт, де ключ - вік, а значення - масив імен людей з цим віком.

const people = [
    {name: 'Alice', age: 21},
    {name: 'Bob', age: 25},
    {name: 'Charlie', age: 21},
    {name: 'David', age: 25},
    {name: 'Eve', age: 30}
]

function countAge(people) {

    const peopleSorted = {}; 

    for (person of people) {

        const age = person.age;
        const name = person.name;

        if (peopleSorted[age]) {
            peopleSorted[age].push(name);
        } else {
            peopleSorted[age] = [name];
        }
    }

    return peopleSorted;
}

console.log(countAge(people));