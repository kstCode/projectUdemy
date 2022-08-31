// 'use strict';

// let number = 5; debugger

// function logNumber() {
//     let number = 4; debugger;
//     console.log(number);
// }

// number = 6; debugger;
// logNumber();

// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '7$'
//         }
//     ],
//     waitors: [
//         {name: 'Alice', age: 22}, {name: 'John', age: 24}
//     ],
//     averageLunchPrice: '20$',
//     openNow: true
// };

// function isOpen(prop) {
//     let answer = '';
//     prop ? answer = 'Открыто' : answer = 'Закрыто';

//     return answer;
// }


// console.log(isOpen(restorantData.openNow));

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

// function transferWaitors(data) {
//     const copy = Object.assign({}, data);

//     copy.waitors[0] = [{name: 'Mike', age: 32}];
//     return copy;
// }

// transferWaitors(restorantData);


//  function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }
//     return result;
//  }
//  console.log(pow(2,6));

//  function powRec(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * powRec(x, n - 1);
//     }
    
//  }
//  console.log(powRec(2,44));


function factorial(num) {
    let result = 1;
    if (typeof(num) !== 'number' || num % 1 !== 0) {
        return `Проверьте введенные данные`;
    } else if (num <= 0) {
        return 1;
    } else if (num === 1) {
        return 1;
    } else {
        return result *= num * factorial(num - 1);
    }
}
console.log(factorial(5));