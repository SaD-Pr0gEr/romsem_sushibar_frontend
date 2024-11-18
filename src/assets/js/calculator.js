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
    console.log(document.querySelectorAll(numberSelectorAll))
    document.querySelectorAll(numberSelectorAll).forEach((el) => {
        sum_ += Number(el.innerHTML)
    })
    return sum_;
}

function setProductsSum() {
    document.querySelector('.cart .submit p span:first-child').innerHTML = valueSum('.cart-product .price span.value')
}

document.querySelectorAll('.cart-product').forEach((element) => {
    element.querySelector('.plus-active').addEventListener(
        'click', () => {
            calculator(`#${element.id} .count`, `#${element.id} .price span`, 'increment')
            setProductsSum()
        }
    );
    element.querySelector('.minus').addEventListener(
        'click', () => {
            calculator(`#${element.id} .count`, `#${element.id} .price span`, 'decrement')
            setProductsSum()
        }
    );
})
