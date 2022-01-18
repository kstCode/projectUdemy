"use strict";

const box = document.getElementById('box');   //old
console.log(box);

const btns = document.getElementsByTagName('button');   //old
console.log(btns[1]);

const circles = document.getElementsByClassName('circle');  //old
console.log(circles);


const hearts = document.querySelectorAll('.heart');
hearts.forEach((item, i) => {
    console.log(item);
    console.log(i);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);
