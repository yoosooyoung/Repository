import React, { Component } from 'react';

//새로 생성한 파일들을 import해옴.
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';

import './App.css';

//컴포넌트가 실행될 때
class App extends Component {
	//constructor가 제일먼저 실행되고, 정의한다.
	constructor(props) {
		//props 초기화
		super(props);
		this.state = {
			subject: { title: 'WEB', sub: 'World wide web!' },
			contents: [
				{ id: 1, title: 'HTML', desc: 'HTML is HyperText' },
				{ id: 2, title: 'CSS', desc: 'CSS is Design' },
				{ id: 3, title: 'JavaScript', desc: 'JavaScript is interactive' },
			],
		};
	}

	render() {
		//state가 받는다.
		return (
			<div className="App">
				<Subject
					title={this.state.subject.title}
					sub={this.state.subject.sub}
				></Subject>
				<TOC data={this.state.contents}></TOC>
				<Content
					title="HTML"
					desc="HTML is HyperText Markup Language."
				></Content>
			</div>
		);
	}
}

export default App;
