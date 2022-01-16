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
			mode: 'read',
			//기본적으로 2번 선택
			selected_content_id: 2,
			welcome: { title: 'Welcome', desc: 'Hello, React!!' },
			subject: { title: 'WEB', sub: 'World wide web!' },
			contents: [
				{ id: 1, title: 'HTML', desc: 'HTML is HyperText' },
				{ id: 2, title: 'CSS', desc: 'CSS is for Design' },
				{ id: 3, title: 'JavaScript', desc: 'JavaScript is interactive' },
			],
		};
	}
	//state가 바뀌면 render함수가 호출된다 -> 화면이 다시 그려진다.
	render() {
		var _title,
			_desc = null;
		if (this.state.mode === 'Welcome') {
			_title = this.state.welcome.title;
			_desc = this.state.welcome.desc;
		} else if (this.state.mode === 'read') {
			var i = 0;
			while (i < this.state.contents.length) {
				var data = this.state.contents[i];
				if (data.id === this.state.selected_content_id) {
					_title = data.title;
					_desc = data.desc;
					break;
				}
				i = i + 1;
			}
		}
		//state가 받는다.
		return (
			<div className="App">
				<Subject
					title={this.state.subject.title}
					sub={this.state.subject.sub}
					//이벤트에 함수를 설치하면 이벤트가 발생되었을 때
					//프롭스로 전달된 onchangepage로 전달된 함수를 호출한다
					onChangePage={function () {
						this.setState({ mode: 'Welcome' });
					}.bind(this)}
				></Subject>
				<TOC
					onChangePage={function (id) {
						//문자 -> 숫자
						this.setState({
							mode: 'read',
							selected_content_id: Number(id),
						});
					}.bind(this)}
					data={this.state.contents}
				></TOC>
				<Content title={_title} desc={_desc}></Content>
			</div>
		);
	}
}

export default App;
