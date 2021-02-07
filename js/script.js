/*
    1.Написать функцию, преобразующую число в объект. 
    Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
    в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
    Например, для числа 245 мы должны получить следующий объект: 
    {
        ‘единицы’: 5, 
        ‘десятки’: 4, 
        ‘сотни’: 2
    }
    Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/
var a;
a = prompt();

class SimpleNumber {
  сотни;
  десятки;
  единицы;
}

function ParseNum(number) {
  let obj = new SimpleNumber();
  if (number > 999) {
    console.log(`Ошибка! Число ${number} более 999!`);
    return obj;
  }
  let temp = number.toString();
  obj.сотни = temp[0];
  obj.десятки = temp[1];
  obj.единицы = temp[2];
  return obj;
}

console.log(ParseNum(a));

/* 2
Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
Реализуйте такие объекты.
Перенести функционал подсчета корзины на объектно-ориентированную базу.*/

let basket = {
  products: [
    {
      product: "pen",
      quantity: 2,
      price: 56
    },
    {
      product: "pencil",
      quantity: 1,
      price: 89
    },
    {
      product: "file",
      quantity: 5,
      price: 14
    },
    {
      product: "paper",
      quantity: 1,
      price: 64
    }
  ],

  countBasketPrice() {
    let result = 0;
    for (i in this.products) {
      result += this.products[i].quantity * this.products[i].price;
    }
    return result;
  }
};

console.log(basket.countBasketPrice());