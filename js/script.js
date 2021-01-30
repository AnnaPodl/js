/*1. Дан код:*/
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // с = 2  а = 2
d = b++; alert(d);           // d = 1 b = 2
c = (2 + ++a); alert(c);      // c = 5 a = 3
d = (2 + b++); alert(d);      // d = 4 b = 3 
alert(a);                    // 3
alert(b);                    // 3
/*Почему код даёт именно такие результаты?
разница ответов зависит от местоположения инкремента или декремента
если перед переменной, то значение сначало прибавляет(уменьшает) на единицу, а потом возращает значение
Если после переменной, то аозращается тоже значение, а потом только увеличивается (уменьшантся на единицу) */

/*2. Чему будет равен x в примере ниже?*/
var a = 2;
var x = 1 + (a *= 2); //в скобках работает как а = а * 2 = 4, значит х = 5
alert(x)

/*3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.*/
var a = -5, b = 9, res;
if (a >= 0 && b >= 0) {
  res = a - b;
}
else if (a < 0 && b < 0) {
  res = a * b;
}
else {
  res = a + b;
}
alert(res);

/*4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.*/
var a = 5;
switch (a) {
  case '0':
    console.log(0);
  case '1':
    console.log(1);
  case '2':
    console.log(2);
  case '3':
    console.log(3);
  case '4':
    console.log(4);
  case '5':
    console.log(5);
  case '6':
    console.log(6);
  case '7':
    console.log(7);
  case '8':
    console.log(8);
  case '9':
    console.log(9);
    break;
  case '10':
    console.log(10);
  case '11':
    console.log(11);
  case '12':
    console.log(12);
  case '13':
    console.log(13);
  case '14':
    console.log(14);
  case '15':
    console.log(15);
}

/*5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.*/
function plus(a, b) {
  return a + b;
}
function minus(a, b) {
  return a - b;
}
function increment(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

/*6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).*/
function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case 'plus':
      return plus(arg1, arg2);
    case 'minus':
      return minus(arg1, arg2);
    case 'increase':
      return increase(arg1, arg2);
    case 'divide':
      return divide(arg1, arg2);
  }
}

//7. *Сравнить null и 0. Попробуйте объяснить результат.
//Результатом сравнения null и 0, будет false
// так-как 0 - это значение, а null - ключевое слово говорящие а том что значения нет.

// 8) *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.
function power(val, pow) {
  if (pow === 1) return val;
  return val * power(val, pow - 1);
}

console.log(power(2, 5));