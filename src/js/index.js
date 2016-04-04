// Javascript Entry Point
import data from './data';
import React from 'react';
import ReactDOM from 'react-dom';
import SingleView from './single_view';
import ListView from './list_view';
import AddUser from './add_user';

//////////////// Contact List (2pg)
var fullListPage = () =>{ ReactDOM.render(
		<ListView users={ data } onUserSelect= { singleUserPage } onNew= { renderForm }/>
		, document.querySelector('.app')
	);
};

var singleUserPage = (singlePerson)=>{	ReactDOM.render(
		<SingleView user={ singlePerson } onBack= { fullListPage }/>
		, document.querySelector('.app')
	);
}

////////////// Form view
function addItemAndRenderList(newItem) {
	data.push(newItem);
	fullListPage();
}

function renderForm(){
	ReactDOM.render(
	<AddUser onAdd={ addItemAndRenderList }/>
	,document.querySelector('.app')
	) 
}

fullListPage();

////////////// Scratch
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