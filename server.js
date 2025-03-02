//i am geniuely sorry for whoever has to update this code
const readline = require('readline');

let buyingPower = 50000;
let day = 1;

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

let companySet = getCompanySet();
console.log(companySet);

let companyArray = Array.from(companySet);
let company1 = companyArray[0];
let company2 = companyArray[1];
let company3 = companyArray[2];
let company4 = companyArray[3];
let company5 = companyArray[4];

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
    while (buyingPower >= 500) {
        console.log(`Day ${day}`);
        console.log(`Your buying power is $${buyingPower}`);
        
        let continueBuying = true;
        while (continueBuying && buyingPower >= 500) {
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
                    continue;
            }

            const totalPrice = calculatePrice(companyPrice, quantity);
            if (totalPrice > buyingPower) {
                console.log('Not enough buying power');
                continue;
            }

            buyingPower = buyStocks(buyingPower, totalPrice);

            const stockPriceChange = randomStockPrice();
            const loss = totalPrice * (stockPriceChange / 100);
            const finalValue = totalPrice + loss;

            console.log(`You bought ${quantity} stocks of ${company} for $${totalPrice}.`);
            console.log(`The stock price changed by ${stockPriceChange}%. You ${loss < 0 ? 'lost' : 'gained'} $${Math.abs(loss)}.`);
            console.log(`Your remaining buying power is $${buyingPower}`);

            const continueAnswer = await askQuestion('Do you want to continue buying stocks? (yes/no) ');
            continueBuying = continueAnswer.toLowerCase() === 'yes';
        }

        updateStockPrices();
        day++;
    }

    console.log('You have less than $500. Game over.');
    rl.close();
}

function updateStockPrices() {
    company1TotalPrice -= company1TotalPrice * (randomStockPrice() / 100);
    company2TotalPrice -= company2TotalPrice * (randomStockPrice() / 100);
    company3TotalPrice -= company3TotalPrice * (randomStockPrice() / 100);
    company4TotalPrice -= company4TotalPrice * (randomStockPrice() / 100);
    company5TotalPrice -= company5TotalPrice * (randomStockPrice() / 100);

    console.log('Updated stock prices:');
    console.log(company1, company1TotalPrice);
    console.log(company2, company2TotalPrice);
    console.log(company3, company3TotalPrice);
    console.log(company4, company4TotalPrice);
    console.log(company5, company5TotalPrice);
}

// Initial call to start the process
main();
