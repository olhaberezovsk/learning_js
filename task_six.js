//Напиши функцію, яка приймає масив чисел і повертає новий масив, в якому всі непарні числа помножені на 2, а парні залишені без змін.

function transformArray(arr) {

    return arr.map(num => num % 2 === 1 ? num * 2 : num);

}

console.log(transformArray([1, 2, 3, 4, 5]))