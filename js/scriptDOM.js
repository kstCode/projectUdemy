"use strict";

const box = document.getElementById('box');   //old
const btns = document.getElementsByTagName('button');   //old
const circles = document.getElementsByClassName('circle');  //old
const hearts = document.querySelectorAll('.heart'); //new
const oneHeart = document.querySelector('.heart'); //new

box.style.backgroundColor = "blue";
btns[1].style.borderRadius = "50%";
circles[1].style.backgroundColor = "red";

for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = "green";
}

hearts.forEach(item => {
    item.style.backgroundColor = "black";
});

const div = document.createElement('div');
const text = document.createTextNode('тут был я');
div.classList.add('black');
// document.body.append(div);
// document.querySelector(".wrapper").append(div);
const wrapper = document.querySelector('.wrapper');
wrapper.append(div);                    //новый метод - вставляет элемент в конец блока wrapper
// wrapper.prepend(div);                   //новый метод - вставляет элемент в начало блока wrapper
// hearts[0].before(div);
// hearts[0].after(div);
// circles[0].remove();                    //новый метод - удаляет элемент
// hearts[0].replaceWith(circles[0]);       //новый метод - меняет выбранный элемент на выбранный другой

// wrapper.insertBefore(div, hearts[1]);   //старый метод
// wrapper.removeChild(hearts[1]);         //старый метод
// wrapper.replaceChild(circles[0], hearts[0]); //старый метод 

div.innerHTML = "hello world";             // вставляет не только текст а также теги
div.innerHTML = "<h1>hello world</h1>";     // вставляет не только текст а также теги

div.textContent = "hello"; // вставляет только текст

div.insertAdjacentHTML("afterend", '<h2>Hello</h2>');