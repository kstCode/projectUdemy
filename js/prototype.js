"use strict";

const soldier = {
    health: 100,
    armor: 200
};

// console.log(soldier);

const Vasya = {
    health: 100500,

};

// Vasya.__proto__= soldier;   //старый, не используемый способ

Object.setPrototypeOf(Vasya, soldier); //устанавливаем прототип для Vasya от soldier

console.log(Vasya.armor);

const John = Object.create(soldier); //создаем прототипную связь для нового объекта John от soldier