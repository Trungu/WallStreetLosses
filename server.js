// generate random decimal number between -9.9 and -0.1

let buyingPower = 50000;

function buyStocks(buyingPower, finalValue) {
    buyingPower -= finalValue;
    return buyingPower;
}

function calucatePrice(currentPrice, quantity) {
    const total = currentPrice * quantity;
    return total;

}
function randomPrice() {
    const min = -9.9;
    const max = -0.1;
    const diff = max - min;
    const randomDecimal = (Math.random() * diff) + min;
    const finalValue = Math.round(randomDecimal * 10) / 10;
    return finalValue;
}

function randomStockPrice() {
    const min = 5;
    const max = 150;
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
const company1Price = randomPrice();
const company2Price = randomPrice();
const company3Price = randomPrice();
const company4Price = randomPrice();

const company1TotalPrice = randomStockPrice();
const company2TotalPrice = randomStockPrice();
const company3TotalPrice = randomStockPrice();
const company4TotalPrice = randomStockPrice();
const company5TotalPrice = randomStockPrice();


const company5Price = randomPrice();

console.log(company1, company1Price);
console.log(company2, company2Price);
console.log(company3, company3Price);
console.log(company4, company4Price);
console.log(company5, company5Price);

console.log(buyStocks(buyingPower, calucatePrice(10, company1TotalPrice)));