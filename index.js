const currencyRates = {
    USD: 1, //US DOLLER
    EUR: 0.92, //EURO
    GBP: 0.79, //BRITISH POUND
    INR: 83.29, //INDIAN RUPEE
    PKR: 277.85, //PAKISTANI RUPEE
    JPY: 151.61, //JAPANESE YEN
    SAR: 3.75, //SAUDIA ARABIA RIYAL
    TRY: 32.03, //TURKISH LIRA
    CNY: 7.23, //CHINESE YUAN RENMINBI
};
document.getElementById('converter-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    let fromCurrency = document.getElementById('from').value;
    let toCurrency = document.getElementById('to').value;
    let amount = parseFloat(document.getElementById('amount').value);
    let fromAmount = currencyRates[fromCurrency];
    let toAmount = currencyRates[toCurrency];
    let baseAmount = amount / fromAmount;
    let convertedAmount = baseAmount * toAmount;
    document.getElementById('result').textContent = `Converted Amount : ${Math.round(convertedAmount)}`;
});
