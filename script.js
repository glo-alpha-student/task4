'use strict';

const title = prompt('Как называется ваш проект?');
const screens = prompt('Какие типы экранов нужно разработать?');
const screenPrice = +prompt('Сколько будет стоить данная работа?');
const adaptive = confirm('Нужен ли адаптив на сайте?');
const service1 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice1 = +prompt('Сколько это будет стоить?');
const service2 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice2 = +prompt('Сколько это будет стоить?');

const rollback = Math.random() * 99;

const showTypeOf = function (variable) {
    return variable + ' ' + typeof variable;
};
const getAllServicePrices = function (firstvariable, secondvariable) {
    return firstvariable + secondvariable;
};
const getServicePercentPrices = function (firstvariable, secondvariable) {
    return firstvariable - Math.ceil((firstvariable * (secondvariable / 100)));
};
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

let allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
let fullPrice = getFullPrice(screenPrice, allServicePrices);
let servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

function getTitle(str) {
    return str.trim()[0].toUpperCase() + str.trim().slice(1).toLowerCase();
}
function getFullPrice(firstvariable, secondvariable) {
    return firstvariable + secondvariable;
}

console.log(showTypeOf(title));
console.log(showTypeOf(screenPrice));
console.log(showTypeOf(Boolean(adaptive)));
console.log(screens);
console.log(allServicePrices);
console.log(fullPrice);
console.log(servicePercentPrice + ' рублей');
console.log(getTitle(title));
console.log(getRollbackMessage(fullPrice));



