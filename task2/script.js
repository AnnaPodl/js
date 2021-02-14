var cart = {
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
var $cart = document.getElementById("cart");
if (cart.products.length > 0) {
    $cart.textContent = "В корзине: " + cart.countBasketTotal() + " товаров на сумму " + cart.countBasketPrice() + " рублей.";
} else {
    $cart.textContent = "Корзина пуста";
}

