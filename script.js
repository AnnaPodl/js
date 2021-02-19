
const buttonElement = document.getElementById('btn');


buttonElement.addEventListener('click', function (event) {
    cart.products[0].quantity += 1;
    cartRefrash();
});

const buttonElement2 = document.getElementById('btn1');


buttonElement2.addEventListener('click', function (event) {
    cart.products[1].quantity += 1;
    cartRefrash();
});


var cart = {
    products: [
        {
            product: "pen",
            quantity: 0,
            price: 56
        },
        {
            product: "pencil",
            quantity: 0,
            price: 89
        },
    ],
    countBasketPrice: function () {
        var result = 0;
        for (i in this.products) {
            result += this.products[i].quantity * this.products[i].price;
        }
        return result;
    },
    countBasketTotal: function () {
        var result = 0;
        for (i in this.products) {
            result += this.products[i].quantity;
        }
        return result;
    }
}

function cartRefrash() {
    var $cart = document.getElementById("cart");
    if (cart.products.length > 0) {
        $cart.textContent = "В корзине: " + cart.countBasketTotal() + " товаров на сумму " + cart.countBasketPrice() + " рублей.";
    } else {
        $cart.textContent = "Корзина пуста";
    }
}

cartRefrash();

