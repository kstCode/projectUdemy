"use strict";

const soldier = {
    health: 100,
    armor: 200
};

// console.log(soldier);

const Vasya = {
    health: 100500,

};

Object.setPrototypeOf(Vasya, soldier);

console.log(Vasya.armor);

const John = Object.create(soldier);