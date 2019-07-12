
// TASK1
// Вместо ... перед pop() и после pop() напишите код, который при вызове
// console.log(arr1) будет давать такой результат -  [81, 96, 324, 15].
// splice и shift использовать нельзя.

// var arr1 = [13, 81, 96, 324, 15];
// arr1[5] = 15;
// arr1.pop();
// var arr2 = arr1.slice(1,5);
// arr1 = arr2;
// console.log(arr1);

// TASK2
// Напишите программу, которая будет брать любой массив и сокращать его длину до 5.
// Если изначально массив меньше 5 символов, то вывести в консоль как есть. Пример:
// [13, 13, 13, 13, 13, 13, 13, 13] => [13, 13, 13, 13, 13]
// [5, 5, 5] => [5, 5, 5]
// [44, 12, 38, 96, 55, 11, 82, 16, 49] => [44, 12, 38, 96, 55]

// var arr1 = [11, 12, 13];
// if (arr1.length > 5) {
//   arr1.length = 5;
//   console.log(arr1);
// } else {
//   console.log(arr1);
// }

// TASK3
// Сделать ту же задачу, что из 2, только добавить сортировку. Пример:
// [44, 12, 38, 96, 55, 11, 82, 16, 49] => [11, 12, 16, 38, 44, 49]

// var arr1 = [44, 12, 38, 96, 55, 11, 82, 16, 49];
// if (arr1.length > 5) {
//   arr1.length = 5;
//
//   console.log(arr1.sort());
// } else {
//   console.log(arr1.sort());
// }

// TASK4
// Есть массив строк (любых строк). Написать программу, которая получает строку
// от пользователя. Если этой строки нет в массиве, вывести в alert “not found”.
// Если строка есть в массиве, то нужно сделать проверку - если ее индекс чётный
// (проверку делать используя оператор %), то вывести в консоль «it’s all good”,
// а если ее индекс нечётный, то удалить ее из массива и вывести массив в консоль
// (без этой строки).
//
// Пример:
// var arr1 = [“John”,  “Kate”,  “Dave”,  “Den”, “Adele”];
//
// Если пользователь вводит “Ann”, то получает в alert Not Found
// Если вводит “Dave”, то получает в консоль “it’s all good”
// Если вводит «Den», то получает в консоль [“John”,  “Kate”,  “Dave”,  “Adele”]



var arr1 = ['John', 'Kate', 'Dave', 'Den', 'Adele'];
var userInput = prompt("Enter your name:");
var inputIndex = arr1.indexOf(userInput);

if (inputIndex == -1) {
alert('Not foound')
} else if (arr1.includes(userInput) && (inputIndex % 2 == 0)){
console.log("it’s all good");
console.log(arr1);
} else if (inputIndex % 2 != 0) {
var del = arr1.splice(inputIndex,1);
console.log(del + ' deleted');
console.log(arr1);
}
