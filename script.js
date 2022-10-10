'use strict';

const title = prompt('Как называется ваш проект?');
const screens = prompt('Какие типы экранов нужно разработать?');
const screenPrice = +prompt('Сколько будет стоить данная работа?');
const adaptive = prompt('Нужен ли адаптив на сайте?');
const service1 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice1 = +prompt('Сколько это будет стоить?');
const service2 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice2 = +prompt('Сколько это будет стоить?');

const rollback = Math.random() * 99;

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
};
const allServicePrices = function getAllServicePrices() {
    return servicePrice1 + servicePrice2;
};
function getFullPrice() {
    const fullPrice = screenPrice + allServicePrices();
    return fullPrice;
}

const servicePercentPrice = function getServicePercentPrices() {
    return getFullPrice() - (getFullPrice() * (rollback / 100));
};
function getTitle(str) {
    return str.trim()[0].toUpperCase() + str.trim().slice(1).toLowerCase();
}
const getRollbackMessage = function (price) {

    if (price > 30000) {
        return 'Даем скидку в 10%';
    } else if (price > 15000) {
        return 'Даем скидку в 5%';
    } else if (price > 0) {
        return 'Скидка не предусмотрена';
    } else {
        return 'Что-то пошло не так';
    }
};

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(Boolean(adaptive));

console.log(screens);

console.log(allServicePrices());
console.log(getFullPrice());
console.log(getTitle(title));
console.log(getRollbackMessage(getFullPrice()));
console.log(Math.ceil(servicePercentPrice()) + ' рублей');




