// Javascript Entry Point
import data from './data';
import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';

ReactDOM.render(
	<List/>
	, document.querySelector('.app')
	);

// var cheteAge = data[0].age;
// var nicoleCity = data[1].city;
// var app = document.querySelector(".app");

// console.log(nicoleCity);

// app.innerHTML= cheteAge;