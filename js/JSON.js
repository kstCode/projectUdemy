'use strict';

const persone = {
    name: 'Alex',
    tel: '+74444444',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

console.log(JSON.stringify(persone)); //преобразует объект persone в JSON формат для отправки на сервер
console.log(JSON.parse(JSON.stringify(persone))); //преобразует данные JSON с сервера в объект

const clone = JSON.parse(JSON.stringify(persone)); // делайет глубокую копию объекта
clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);