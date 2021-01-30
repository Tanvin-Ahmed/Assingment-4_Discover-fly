// ////////////////INCREASE FUNCTION//////////////////////
function priceIncreasing(price) {
    let taxAmount = 0;
    // tax increasing
    const addTax = document.getElementById('tax').innerText;
    const taxNumber = parseFloat(addTax);
    const tax = (10 * price) / 100;
    taxAmount = taxNumber + tax;
    document.getElementById('tax').innerText = taxAmount.toFixed(2);
    // subtotal and total Increasing
    function totalAmount(totalID) {
        const addTotal = document.getElementById(totalID).innerText;
        const totalNumber = parseFloat(addTotal);
        // add total price
        if (totalID === 'total' || totalID == 'total-cost') {
            // add
            const addTotalPrice = totalNumber + tax + price;
            document.getElementById(totalID).innerText = addTotalPrice.toFixed(2);
        }
        // add subtotal price
        else {
            const addSubTotalPrice = totalNumber + price;
            document.getElementById(totalID).innerText = addSubTotalPrice;
        }
    }
    // invoking for booking form part
    totalAmount('subTotal');
    totalAmount('total');
    // invoking for message part
    totalAmount('total-cost');
}


// /////////////////////DECREASE FUNCTION//////////////////
function priceDecreasing(price) {
    let taxAmount = 0;
    // tax increasing
    const catchTax = document.getElementById('tax').innerText;
    const taxNumber = parseFloat(catchTax);
    const tax = (10 * price) / 100;
    taxAmount = taxNumber - tax;
    document.getElementById('tax').innerText = taxAmount.toFixed(2);
    // decrease subTotalPrice and totalPrice
    function totalAmount(totalID) {
        const catchTotal = document.getElementById(totalID).innerText;
        const totalNumber = parseFloat(catchTotal);
        // add total price
        if (totalID === 'total' || totalID == 'total-cost') {
            // add
            const decreaseTotalPrice = totalNumber - tax - price;
            document.getElementById(totalID).innerText = decreaseTotalPrice.toFixed(2);
        }
        // add subtotal price
        else {
            const decreaseSubTotalPrice = totalNumber - price;
            document.getElementById(totalID).innerText = decreaseSubTotalPrice;
        }
    }
    // invoking for booking form part
    totalAmount('subTotal');
    totalAmount('total');
    // invoking for message part
    totalAmount('total-cost');
}


/////////////////////////MAIN FUNCTION////////////////////
// for plus and mins button
function main(buttonID, perTicketCount, totalCountID) {
    // price
    let price;
    if (totalCountID == 'firstClassPrice') {
        price = 150;
    } else {
        price = 100;
    }
    // catch buttons
    let addNumber;
    const button = document.getElementById(buttonID);
    button.addEventListener('click', function () {
        const value = document.getElementById(perTicketCount).innerText;
        const valueNumber = parseFloat(value);
        // for plus button
        if ((buttonID === 'plusBtn1' && perTicketCount === 'buyFistClass') || (buttonID == 'plusBtn2' && perTicketCount == 'buyEconomy')) {
            addNumber = valueNumber + 1;
            // message
            document.getElementById(perTicketCount).innerText = addNumber;
            // booking-from
            document.getElementById(totalCountID).value = addNumber;
            // invoking price Increasing function
            priceIncreasing(price);
        }
        // for minus button
        else {
            addNumber = valueNumber - 1;
            if (addNumber >= 0) {
                // message
                document.getElementById(perTicketCount).innerText = addNumber;
                // booking-form
                document.getElementById(totalCountID).value = addNumber;
                // invoking price Decreasing function
                priceDecreasing(price);
            }
        }
        // invoking message function
        message(addNumber);
    })
}


// /////////////////////////////BOOK NOW BUTTON PART///////////////////////////
function message(addNumber) {
    const bookNow = document.getElementById('bookNow');
    bookNow.addEventListener('click', function () {
        // message
        if (addNumber >= 1) {
            document.getElementById('form').style.display = 'none';
            document.getElementById('Message').style.display = 'block';
        }
    })
}

// ///////////////////INVOKING MAIN FUNCTION/////////////////////
// parameters are buttonId, perTicketCount , totalCountID
main('plusBtn1', 'buyFistClass', 'firstClassPrice');

main('minusBtn1', 'buyFistClass', 'firstClassPrice');

main('plusBtn2', 'buyEconomy', 'economyPrice');

main('minusBtn2', 'buyEconomy', 'economyPrice');