'use strict';

// function showThis() {
//     console.log(this);
// }
// showThis();


//  const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
        // console.log(this);  контекст ссылается на объект
//         function shout() {
//             console.log(this); вложенная функция в метод объекта теряет контекст
//         }
//         shout();
//     }
//  };
// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello! ' + this.name);
//     };
// }
// let ivan = new User('Ivan', 23);

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };
// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);


// function count(num) {
//     return this*num;
// }
// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));
//1) Обычнаяа функция: this = window, в strict mode = undefined;
//2) Контекст у методов объекта - сам объект;
//3) this в конструкторах и классах - это новый экземпляр объекта
//4) Ручная привязка this: call, apply, bind

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    this.style.backgroundColor = 'red';
});

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        };
        say();
    }
};
obj.sayNumber();

const double = a => a * 2;
console.log(double(4));