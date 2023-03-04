"use strict";

const numberOfFilms =  +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: {},
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('один из просмотренных фильмов', ' ');
const b = prompt('на сколько ауенити его', '  ');
const c = prompt('один из просмотренных фильмов', '  ');
const d = prompt('на сколько ауенити его', '  ');

personalMovieDB[a] = b;
personalMovieDB[c] = d;

console.log(personalMovieDB);
