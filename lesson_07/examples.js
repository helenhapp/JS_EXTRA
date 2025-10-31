// // console.log();

// let numbers = [10, 20, 30, 40, 50]; // створюємо масив
// // console.log(numbers[2]); // виводимо третє значення
// numbers[1] = 100; // змінюємо друге значення
// // console.log(numbers); // виводимо весь масив
// // console.log(numbers.length); // виводимо довжину

// // console.log();

// let fruits = ["apple", "banana", "orange", "pineapple", "mango", "pear"]; // створюємо масив
// // console.log(fruits[1]); // виводимо третє значення
// fruits[3] = "peach"; // змінюємо друге значення
// console.log(fruits); // виводимо весь масив
// // console.log(fruits.length); // виводимо довжину

// console.log();

// numbers.push(7);
// console.log(numbers);
// fruits.pop();
// console.log(fruits);

console.log();

let numbers = [10, 100, 30, 40, 50, 7];

// // добуток
// let product = 1;
// numbers.forEach((num) => {
//   product *= num;
// });
// console.log("добуток: " + product);

// // найменше число
// let min = numbers[0];
// numbers.forEach((num) => {
//   if (num < min) {
//     min = num;
//   }
// });
// console.log("найменше число: " + min);

// // індекс найменшого числа
// console.log("індекс найменшого числа: " + numbers.indexOf(min));

// numbers.forEach((num) => {
//   console.log(num);
// });

// // сума
// let sum = 0;
// numbers.forEach((num) => {
//   sum += num;
// });
// console.log("сума: " + sum);

// // середнє арифметичне (сума/кількість)
// let average = sum / numbers.length;
// console.log("середнє арифметичне: " + average);

// // найбільше число
// let max = numbers[0];
// numbers.forEach((num) => {
//   if (num > max) {
//     max = num;
//   }
// });
// console.log("найбільше число: " + max);

// // індекс найбільшого числа
// console.log("індекс найбільшого числа: " + numbers.indexOf(max));

// let box = ["red", "green", "yellow", "blue", "white"];

// box.splice(3, 1); // знаходимо індекс 3, видаляємо 1 елемент

// box.splice(2, 3); // знаходимо індекс 2, видаляємо 3 елементи

// box.splice(1, 1, "black"); // знаходимо індекс 1, видаляємо 1 елемент, додаємо на його місці 1 новий елемент

// box.splice(1, 1, "black", "orange"); // знаходимо індекс 1, видаляємо 1 елемент, додаємо на його місці 2 нові елементи

// let gifts = ["шоколад", "шкарпетки", "ноутбук", "шампунь", "книга"];
// console.log(gifts);

// gifts.splice(1, 1); // видалити "шкарпетки"
// console.log(gifts);

// gifts.splice(2, 1, "телефон", "павербанк"); // замінити "шампунь"
// console.log(gifts);

let games = ["Minecraft", "Fortnite", "GTA V", "Valorant", "Roblox"];
console.log(games);

games.splice(3, 1); // видалити "шкарпетки"
console.log(games);

games.splice(1, 2, "Among Us"); // замінити "шампунь"
console.log(games);
