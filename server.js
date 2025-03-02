//i dont understand any of this, i'm sorry for whoever has to update this

const readline = require('readline');

let buyingPower = 50000;

function buyStocks(buyingPower, finalValue) {
    buyingPower -= finalValue;
    return buyingPower;
}

function calculatePrice(currentPrice, quantity) {
    const total = currentPrice * quantity;
    return total;
}

function randomPrice() {
    const min = 5;
    const max = 150;
    const diff = max - min;
    const randomDecimal = (Math.random() * diff) + min;
    const finalValue = Math.round(randomDecimal * 10) / 10;
    return finalValue;
}

function randomStockPrice() {
    const min = -9.9;
    const max = -0.1;
    const diff = max - min;
    const randomDecimal = (Math.random() * diff) + min;
    const finalValue = Math.round(randomDecimal * 10) / 10;
    return finalValue;
}

function getCompanySet() {
    const companies = ['Apple', 'Google', 'Microsoft', 'Amazon', 'Facebook', 'Netflix', 'Tesla', 'Uber', 'Airbnb', 'Lyft', "Slack", "Celsius", "Hack Club"];
    const companySet = new Set();
    while (companySet.size < 5) {
        const randomIndex = Math.floor(Math.random() * companies.length);
        companySet.add(companies[randomIndex]);
    }
    return companySet;
}

const companySet = getCompanySet();
console.log(companySet);

const companyArray = Array.from(companySet);
const company1 = companyArray[0];
const company2 = companyArray[1];
const company3 = companyArray[2];
const company4 = companyArray[3];
const company5 = companyArray[4];

let company1TotalPrice = randomPrice();
let company2TotalPrice = randomPrice();
let company3TotalPrice = randomPrice();
let company4TotalPrice = randomPrice();
let company5TotalPrice = randomPrice();

console.log(company1, company1TotalPrice);
console.log(company2, company2TotalPrice);
console.log(company3, company3TotalPrice);
console.log(company4, company4TotalPrice);
console.log(company5, company5TotalPrice);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
    console.log(`Your buying power is $${buyingPower}`);
    const company = await askQuestion('Which company do you want to buy stocks from? ');
    const quantity = await askQuestion('How many stocks do you want to buy? ');

    let companyPrice;
    switch (company) {
        case company1:
            companyPrice = company1TotalPrice;
            break;
        case company2:
            companyPrice = company2TotalPrice;
            break;
        case company3:
            companyPrice = company3TotalPrice;
            break;
        case company4:
            companyPrice = company4TotalPrice;
            break;
        case company5:
            companyPrice = company5TotalPrice;
            break;
        default:
            console.log('Invalid company');
            rl.close();
            return;
    }

    const totalPrice = calculatePrice(companyPrice, quantity);
    buyingPower = buyStocks(buyingPower, totalPrice);

    const stockPriceChange = randomStockPrice();
    const loss = totalPrice * (stockPriceChange / 100);
    const finalValue = totalPrice + loss;

    console.log(`You bought ${quantity} stocks of ${company} for $${totalPrice}.`);
    console.log(`The stock price changed by ${stockPriceChange}%. You ${loss < 0 ? 'lost' : 'gained'} $${Math.abs(loss)}.`);
    console.log(`Your remaining buying power is $${buyingPower}`);

    rl.close();
}

main();

function updateStockPrices() {
    company1TotalPrice = randomPrice();
    company2TotalPrice = randomPrice();
    company3TotalPrice = randomPrice();
    company4TotalPrice = randomPrice();
    company5TotalPrice = randomPrice();

    console.log('Updated stock prices:');
    console.log(company1, company1TotalPrice);
    console.log(company2, company2TotalPrice);
    console.log(company3, company3TotalPrice);
    console.log(company4, company4TotalPrice);
    console.log(company5, company5TotalPrice);
}

// Simulate a new day every 24 hours (86400000 milliseconds)
setInterval(updateStockPrices, 86400000);
