// Javascript Entry Point
import data from './data';
import React from 'react';
import { render } from 'react-dom';
import SingleView from './single_view';
import ListView from './list_view';
import AddUser from './add_user';
import { Router, Route, hashHistory } from 'react-router';

render((
  <Router history={hashHistory}>
    <Route path="/" component={ListView}/>
    <Route path="/add-user" component={AddUser}/>
    <Route path="/single-view" component={SingleView}/>
  </Router>
), document.querySelector('.app'));

// var fullListPage = () =>{ ReactDOM.render(
// 		<ListView users={ data } onUserSelect= { singleUserPage } onNew= { renderForm }/>
// 		, document.querySelector('.app')
// 	);
// };

// var singleUserPage = (singlePerson)=>{	ReactDOM.render(
// 		<SingleView user={ singlePerson } onBack= { fullListPage }/>
// 		, document.querySelector('.app')
// 	);
// }

// function addItemAndRenderList(newItem) {
// 	data.push(newItem);
// 	fullListPage();
// }

// function renderForm(){
// 	ReactDOM.render(
// 	<AddUser onAdd={ addItemAndRenderList }/>
// 	,document.querySelector('.app')
// 	) 
// }

// fullListPage();