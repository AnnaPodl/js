

/*1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100*/
function isPrime(value) {
  for (let i = 2; i < value; i += 1) {
    if (value % i === 0) return false;
  }
  if (value >= 1) return true;
}

var i = 100;
while (i) {
  if (isPrime(i)) console.log(i);
  i -= 1;
}


/* 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
3. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.*/

function getNumber(min, max) {
  var number = parseInt(Math.random() * (max - min) + min);
  if (number === -0) number = 0;
  return number;
}

var basket = [
  {
    product: "pen",
    price: getNumber(50, 100)
  },
  {
    product: "pencil",
    price: getNumber(50, 100)
  },
  {
    product: "file",
    price: getNumber(50, 100)
  },
  {
    product: "paper",
    price: getNumber(50, 100)
  }
];
var basketPrice = 0;
for (var prod of basket) {
  basketPrice += prod.price;
  console.log("Товар " + prod.product + " стоит: " + prod.price);
}

console.log("Стоимость корзины: " + basketPrice + " у.е.");

// ------------------------------------------------------------------------------------------------------------


function countBasketPrice(basket) {
  var funBasketPrice = 0;
  for (var prod of basket) {
    funBasketPrice += prod.price;
  }
  return funBasketPrice;
}

console.log("Стоимость корзины: " + countBasketPrice(basket) + " у.е.");

/* 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for(…){// здесь пусто}*/
for (var i = 0; i < 10; console.log(i++)) { }

/* 5 *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов*/

for (var i = 0; i < 20; ++i) {
  var str = '*';
  str = str.repeat(i)
  console.log(str);
}