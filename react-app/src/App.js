import './App.css';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import React, { Component } from 'react';

//react가 가진 Component 클래스를 상속받은 App
//render 메소드를 가지고 있다.
class App extends Component {
	render() {
		return (
			<div classNme="App">
				<Subject title="React" sub="For UI"></Subject>
				<Subject title="WEB" sub="word wide web"></Subject>
				<TOC></TOC>
				<Content
					desc="HTML is HyperText Markup Language."
					title="HTML"
				></Content>
			</div>
		);
	}
}
export default App;
