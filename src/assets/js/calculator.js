function calculator(countSelector, priceSelector, action) {
    let count = Number(document.querySelector(countSelector).innerHTML);
    let price = Number(document.querySelector(priceSelector).innerHTML);
    if (action === 'increment' && count >= 1) {
        document.querySelector(priceSelector).innerHTML = String((price / count) * (count + 1));
        document.querySelector(countSelector).innerHTML = count + 1;
    } else if (action === 'decrement' && count > 1) {
        document.querySelector(priceSelector).innerHTML = String((price / count) * (count - 1));
        document.querySelector(countSelector).innerHTML = count - 1;
    }
}

function valueSum(numberSelectorAll) {
    let sum_ = 0;
    document.querySelectorAll(numberSelectorAll).forEach((el) => {
        sum_ += Number(el.innerHTML)
    })
    return sum_;
}

function setProductsSum(changeHtmlSelector, valueHtmlSelector) {
    document.querySelector(changeHtmlSelector).innerHTML = valueSum(valueHtmlSelector)
}

document.querySelectorAll('.cart-product').forEach((element) => {
    element.querySelector('.plus-active').addEventListener(
        'click', () => {
            calculator(`#${element.id} .count`, `#${element.id} .price span`, 'increment')
            setProductsSum('.cart .submit p span:first-child', '.cart-product .price span.value')
        }
    );
    element.querySelector('.minus').addEventListener(
        'click', () => {
            calculator(`#${element.id} .count`, `#${element.id} .price span`, 'decrement')
            setProductsSum('.cart .submit p span:first-child', '.cart-product .price span.value')
        }
    );
})

document.querySelectorAll('.product-info').forEach((element) => {
    element.querySelector('.plus-active').addEventListener(
        'click', () => {
            calculator(`#${element.id} .count`, `#${element.id} .price span`, 'increment')
            setProductsSum('.calc-container .price .value', '.calc-container .price .value')
        }
    );
    element.querySelector('.minus').addEventListener(
        'click', () => {
            calculator(`#${element.id} .count`, `#${element.id} .price span`, 'decrement')
            setProductsSum('.calc-container .price .value', '.calc-container .price .value')
        }
    );
})
