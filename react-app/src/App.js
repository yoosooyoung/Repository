import React, { Component } from 'react';

//새로 생성한 파일들을 import해옴.
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Subject title="WEB" sub="world wide web!"></Subject>
				<TOC></TOC>
				<Content
					title="HTML"
					desc="HTML is HyperText Markup Language."
				></Content>
			</div>
		);
	}
}

export default App;
