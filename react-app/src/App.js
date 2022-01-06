import './App.css';
import React, { Component } from 'react';

//react가 가진 Component 클래스를 상속받은 App
//render 메소드를 가지고 있다.
class App extends Component {
	render() {
		return <div classNme="App">Hello, React!!</div>;
	}
}
export default App;

//subject라는 이름을 가진 Component를 만들겠다.
class Subject extends Component {
	render() {
		return (
			<header>
				<h1>WEB</h1>
				word wide web
			</header>
		);
	}
}
