"use strict";

let objBasket = JSON.parse(window.localStorage.basket);
const basketDivLink = document.querySelector('.contain-div');
basketDivLink.innerHTML = htmlGenerateBasket(objBasket);

function htmlGenerateBasket(objBasket) {
    let result = [];
    let arrBascket = objBasket.arrBascket;
    if (arrBascket.length > 0) {
        arrBascket.forEach(items => result.push(
            `<div class='item-wrap' data-name='${items.name}'>
				<div class='item-desc'>
					${items.name}
				</div>
				<div class='item-stats'>
					<div class='item-plus''>
						<img src="images/plus.png" />
					</div>
					<div class='item-count' data-name='${items.name}'>
						${items.count}
					</div>
					<div class='item-minus''>
						<img src="images/minus.png" />
					</div>
					<div class='items-sum' data-name='${items.name}'>
						${items.price} руб.
					</div>
				</div>
			</div>`));
    } else {
        result.push(
            `<div class='item-wrap'>
				<div class='item-desc'>
					<p>Корзина пустая</p>
				</div>
				<div class='item-stats'>
				</div>
			</div>`);
    }
    const checkBasket = document.querySelector('#checkBasket');
    if (!checkBasket) {
        let reducer = (sum, current) => sum + current.price * current.count;
        let resSum = arrBascket.reduce(reducer, 0);
        result.push(
            `<div class='basket-footer'>
				<div id="checkBasket" class='total-sum'>
				${resSum} руб.
				</div>
				<div class='next-button'>
					<p>Далее</p>
				</div>
			</div>`)
    }

    return result.join('');
};

const nextLink = document.querySelectorAll('.next');

nextLink.forEach((element) => {
    let arrLink = element.querySelector('.arrow');
    arrLink.addEventListener('click', (e) => {
        arrLink.classList.toggle('up');
        arrLink.classList.toggle('down');

        let hideLink = element.querySelector(".show");
        hideLink.classList.toggle('hidden');
    });
});

nextLink.forEach((element, index) => {
    let buttonLink = element.querySelector(".next-button");
    buttonLink.addEventListener('click', (e) => {
        if (element === nextLink[nextLink.length - 1]) {
        }
        else {
            let arrLinkParent = element.querySelector(".arrow");
            let arrLinkParentSibling = nextLink[index + 1].querySelector(".arrow");
            let panelShow = nextLink[index + 1].querySelector('.hidden');
            let panelHide = element.querySelector('.show');

            if (panelShow != null && panelShow.classList.contains('hidden')) {
                arrLinkParent.classList.toggle('up');
                arrLinkParent.classList.toggle('down');
                arrLinkParentSibling.classList.toggle('up');
                arrLinkParentSibling.classList.toggle('down');
                panelHide.classList.toggle('hidden');
                panelShow.classList.toggle('hidden');

            } else {
                arrLinkParent.classList.toggle('up');
                arrLinkParent.classList.toggle('down');
                if (panelHide != null) {
                    panelHide.classList.toggle('hidden');
                }

            }
        }
    });
});


const basketDivLinkAll = document.querySelectorAll('.item-wrap');
basketDivLinkAll.forEach((element) => {
    let item_plus = element.querySelector('.item-plus');
    let item_count = element.querySelector('.item-count');
    let item_minus = element.querySelector('.item-minus');
    item_plus.addEventListener('click', (e) => {
        item_count.textContent = Number(item_count.textContent) + 1;
    });
    item_minus.addEventListener('click', (e) => {
        item_count.textContent = Number(item_count.textContent) - 1;
    });
});