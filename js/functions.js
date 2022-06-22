"use strict";

let num = 20;

function showFirstMessage(text) {               //function declaration
    console.log(text);
    let num = 10;
}

showFirstMessage("hello world");
console.log(num);

// function calc(a, b) {                        //function declaration
//     return a + b;
// }

// console.log(calc(1, 2));
// console.log(calc(5, 2));
// console.log(calc(10, 2));




const logger = function(){                      //function expression
    console.log("hello");
};
logger();


const calc = (a, b) => {                        //arrow function
    return a + b;
}; 





const usdCurr = 28;


function convert(amount, curr) {
    console.log(usdCurr * amount);
}

convert(500, usdCurr);