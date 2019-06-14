function renderWaitstaffCalculator(){
    displaySubtotal();
}

function handleMealDetailsSubmit(){
    $('.meal-details-submit').click(function(event){
        event.preventDefault();

        const mealPrice = $(event.target).siblings('.base-meal-input').val();
        store.mealPrice = parseInt(mealPrice);
        console.log(store.mealPrice);

        const taxRate = $(event.target).siblings('.tax-rate-input').val();
        store.taxRate = taxRate;

        const tipPercentage = $(event.target).siblings('.tip-percentage-input').val();
        store.tipPercentage = tipPercentage;

        const subtotal = mealPrice + (mealPrice * taxRate);
        store.subtotal = parseInt(subtotal);

        renderWaitstaffCalculator();
    })
}

function handleCancelButton(){
    $('.meal-details-cancel').click(function(event){
        store.mealPrice = parseInt(0);
        console.log(store);
        renderWaitstaffCalculator();
    })
}

function displaySubtotal(){
    $('.subtotal').html(generateSubtotalHTML())
}

function generateSubtotalHTML(){
    return `
        <p>Subtotal: ${store.subtotal}</p>
    `
}

function handleWaitstaffCalculator(){
    handleCancelButton();
    handleMealDetailsSubmit();
    renderWaitstaffCalculator();
}

$(handleWaitstaffCalculator);