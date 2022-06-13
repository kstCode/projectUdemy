let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели", "");
let questionLastFilmsViewed = prompt("Один из последних просмотренных фильмов?", "");
let lastFilmsRate = prompt("На сколько оцените его?", "");
let questionLastFilmsViewed2 = prompt("Один из последних просмотренных фильмов?", "");
let lastFilmsRate2 = prompt("На сколько оцените его?", "");

const personalMoveiDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

personalMoveiDB.movies[questionLastFilmsViewed] = lastFilmsRate;
personalMoveiDB.movies[questionLastFilmsViewed2] = lastFilmsRate2;
console.log(personalMoveiDB);