import React, { Component } from 'react';

//새로 생성한 파일들을 import해옴.
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import Subject from './components/Subject';
import Control from './components/Control';

import './App.css';
import CreateContent from './components/CreateContent';

//컴포넌트가 실행될 때
class App extends Component {
	//constructor가 제일먼저 실행되고, 정의한다.
	constructor(props) {
		//props 초기화
		super(props);
		this.max_content_id = 3;
		this.state = {
			mode: 'create',
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
			_article,
			_desc = null;
		if (this.state.mode === 'Welcome') {
			_title = this.state.welcome.title;
			_desc = this.state.welcome.desc;
			_article = <ReadContent title={_title} desc={_desc}></ReadContent>;
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
			_article = <ReadContent title={_title} desc={_desc}></ReadContent>;
			//mode가 create면 aricle이 담긴 conponent를 호출한다.
		} else if (this.state.mode === 'create') {
			_article = (
				<CreateContent
					onSubmit={function (_title, _desc) {
						this.max_content_id = this.max_content_id + 1;
						// 원본을 바꿈
						// this.state.contents.push({
						// 	id: this.max_content_id,
						// 	title: _title,
						// 	desc: _desc,
						// });

						// 원본데이터를 바꾸지않고 데이터를 갱신함
						// var _contents = this.state.contents.concat({
						// 	id: this.max_content_id,
						// 	title: _title,
						// 	desc: _desc,
						// });
						//배열을 복제함 , 객체는 Object.assign => immutable과 같음
						var newContents = Array.from(this.state.contents);
						newContents.push({
							id: this.max_content_id,
							title: _title,
							desc: _desc,
						});
						//state값이 변경되었으니 다시 랜더링이 된다.
						//-> shouldComponentUpdate 을쓰면 랜더링안됨
						this.setState({ contents: newContents });
					}.bind(this)}
				></CreateContent>
			);
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
				<Control
					onChangeMode={function (_mode) {
						this.setState({
							mode: _mode,
						});
					}.bind(this)}
				></Control>
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
				{_article}
			</div>
		);
	}
}

export default App;
