// Javascript Entry Point
import data from './data';
import React from 'react';
import ReactDOM from 'react-dom';
import SingleView from './single_view';
import ListView from './list_view';

var fullListPage = () =>{ ReactDOM.render(
		<ListView users={ data } onUserSelect= { singleUserPage }/>
		, document.querySelector('.app')
	);
};

var singleUserPage = (singlePerson)=>{	ReactDOM.render(
		<SingleView user={ singlePerson } onBack= { fullListPage }/>
		, document.querySelector('.app')
	);
}

fullListPage();

// singleUserPage(tempUser);
// fullListPage();

// user={user.name} onBack={function}
// var tempUser = {
// 	name: "TEST Bay",
// 	email: "cTESTbeybey@gmail.com",
// 	phone: "123-537-7891", 
// 	location: "Luanda, Angola",
// 	photo: "http://fillmurray.com/50/50"
// }

// var tempOnBack = function() {
// 	console.log("fake function works!");
// }