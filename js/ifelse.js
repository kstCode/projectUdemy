"use strict"

if (9 == 9) {
    console.log('ok!')
} else {
    console.log('Error');
}


// if (num < 49) {
//     console.log('error!');
// }   else if (num < 100) {
//     console.log('Too many');
// }   else {
//     console.log('ok!');
// }
const num = 50;
switch (num) {
    case 49:    
        console.log('Неверно');
        break;
    case 100:
        console.log('В точку');
        break;
    case 50:
        console.log('В точку');
        break;
    default:
        console.log('Не в этот раз');
        break;   

}