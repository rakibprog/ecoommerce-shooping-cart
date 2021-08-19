function updateProduct(product, price, isIncrease) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncrease == true) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const casePrice = document.getElementById(product + '-price');
    casePrice.innerText = productNumber * price;
    // calculate Total
    calculateTotal();
}


function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = productInput.value;
    console.log(productNumber);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 100;
    const caseTotal = getInputValue('case') * 50;
    const subTotal = phoneTotal + caseTotal;
    //update on the html

    const tex = document.getElementById('sub-total').innerText = subTotal;
    const total = document.getElementById('text-total').innerText = tex / 10;
    const totalPrice = tex + total;
    document.getElementById('total').innerText = totalPrice;


}
// case increase decrease events 
document.getElementById('case-plus').addEventListener('click', function() {
    updateProduct('case', 50, true);
});

document.getElementById('case-minus').addEventListener('click', function() {
    updateProduct('case', 50, false);
});

// phone increase decrease events 

document.getElementById('phone-plus').addEventListener('click', function() {
    updateProduct('phone', 100, true);
});

document.getElementById('phone-minus').addEventListener('click', function() {
    updateProduct('phone', 100, false);
})