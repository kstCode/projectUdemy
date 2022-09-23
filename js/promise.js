'use strict';

console.log('Запрос данных...');




const req = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Подготовка данных...');
    
        const product = {
            name: 'TV',
            price: 2000
        };
        
        resolve(product);
    }, 2000);
});

req.then((data) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        data.status = 'order';
        resolve(data);
        // reject();
    }, 2000);
    });
}).then((data) => {
    data.modify = 'true';
    return data;
}).then((data) => {
    console.log(data);
}).catch(() => {
    console.error('ERROOOOOOR');
}).finally(() => {
    console.log('Finally');
}); 

const test = time => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
};

// test(1000).then(() => console.log('1000ms'));
// test(2000).then(() => console.log('2000ms'));

// Promise.all([test(1000), test(2000)]).then(() => console.log('all complete'));
Promise.race([test(1000), test(2000)]).then(() => console.log('1st complete'));