const amountInput = document.getElementById("amount");
 const fromCurrency = document.getElementById("fromCurrency");
 const toCurrency = document.getElementById("toCurrency");
 const convertButton = document.getElementById("convert");
 const swapButton = document.getElementById("swap");
 const result = document.getElementById("result");
 const rateText = document.getElementById("rate");



const rates = {
    USD: 1,
    INR: 96.17,
    EUR: 0.89,
    GBP: 0.75,
    JPY: 148.5,
    AUD: 1.51,
    CAD: 1.38,
    CHF: 0.80,
    CNY: 7.12,
    SGD: 1.28
};



function convertCurrency() {

    const amount = Number(amountInput.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;

    // Check amount
    if (amount <= 0 || isNaN(amount)) {

        result.textContent = "Please enter a valid amount.";
        rateText.textContent = "";

        return;
    }

    // Same currency
    if (from === to) {

        result.textContent =
            amount.toFixed(2) + " " +
            from +
            " = " +
            amount.toFixed(2) +
            " " +
            to;

        rateText.textContent =
            "1 " + from + " = 1 " + to;

        return;
    }

    
    const amountInUSD = amount / rates[from];

    
    const convertedAmount = amountInUSD * rates[to];

    
    const exchangeRate = rates[to] / rates[from];

    result.textContent =
        amount.toFixed(2) +
        " " +
        from +
        " = " +
        convertedAmount.toFixed(2) +
        " " +
        to;

    rateText.textContent =
        "1 " +
        from +
        " = " +
        exchangeRate.toFixed(4) +
        " " +
        to;
}



convertButton.addEventListener("click", convertCurrency);



swapButton.addEventListener("click", function () {

    const oldFrom = fromCurrency.value;

    fromCurrency.value = toCurrency.value;

    toCurrency.value = oldFrom;

    convertCurrency();
});



amountInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        convertCurrency();
    }
});



fromCurrency.addEventListener("change", convertCurrency);

toCurrency.addEventListener("change", convertCurrency);



convertCurrency();