const btn = document.querySelector('#btn');

// btn.onclick = function() { //плохой способ, если повесить несколько таких, то будет работать
    // alert('click');        //только последнее событие, так же нельзя удалить событие
// };

// btn.addEventListener('click', function() {
//     alert('click');
// });
// btn.addEventListener('click', function() {
//     alert('second click');
// });
const deleteElement = function(e) {
    console.log(e.target);
};
btn.addEventListener('mouseenter', deleteElement);
btn.removeEventListener('mouseenter', deleteElement);

