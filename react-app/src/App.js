import React, { Component } from 'react';

//새로 생성한 파일들을 import해옴.
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import Subject from './components/Subject';
import Control from './components/Control';

import './App.css';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

//컴포넌트가 실행될 때
class App extends Component {
	//constructor가 제일먼저 실행되고, 정의한다.
	constructor(props) {
		//props 초기화
		super(props);
		this.max_content_id = 3;
		this.state = {
			mode: 'welcome',
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
	getReadContent() {
		var i = 0;
		while (i < this.state.contents.length) {
			var data = this.state.contents[i];
			if (data.id === this.state.selected_content_id) {
				return data;
				break;
			}
			i = i + 1;
		}
	}
	getContent() {
		var _title,
			_article,
			_desc = null;
		if (this.state.mode === 'Welcome') {
			_title = this.state.welcome.title;
			_desc = this.state.welcome.desc;
			_article = <ReadContent title={_title} desc={_desc}></ReadContent>;
		} else if (this.state.mode === 'read') {
			var _content = this.getReadContent();
			_article = (
				<ReadContent
					title={_content.title}
					desc={_content.desc}
				></ReadContent>
			);
			//mode가 create면 aricle이 담긴 conponent를 호출한다.
		} else if (this.state.mode === 'create') {
			_article = (
				<CreateContent
					onSubmit={function (_title, _desc) {
						this.max_content_id = this.max_content_id + 1;
						var newContents = Array.from(this.state.contents);
						newContents.push({
							id: this.max_content_id,
							title: _title,
							desc: _desc,
						});
						this.setState({
							contents: newContents,
							mode: 'read',
							selected_content_id: this.max_content_id,
						});
					}.bind(this)}
				></CreateContent>
			);
		} else if (this.state.mode === 'update') {
			_content = this.getReadContent();
			_article = (
				<UpdateContent
					data={_content}
					onSubmit={function (_id, _title, _desc) {
						//contents를 복사한 새로운 배열
						var _contents = Array.from(this.state.contents);
						var i = 0;
						while (i < _contents.length) {
							if (_contents[i].id === _id) {
								_contents[i] = { id: _id, title: _title, desc: _desc };
								break;
							}
							i = i + 1;
						}
						this.setState({ contents: _contents, mode: 'read' });
					}.bind(this)}
				></UpdateContent>
			);
		}
		return _article;
	}
	//state가 바뀌면 render함수가 호출된다 -> 화면이 다시 그려진다.
	render() {
		return (
			<div className="App">
				<Subject
					title={this.state.subject.title}
					sub={this.state.subject.sub}
					onChangePage={function () {
						this.setState({ mode: 'Welcome' });
					}.bind(this)}
				></Subject>
				<Control
					onChangeMode={function (_mode) {
						if (_mode === 'delete') {
							if (window.confirm('삭제하시겠습니까?')) {
								var _contents = Array.from(this.state.contents);
								var i = 0;
								while (i < _contents.length) {
									if (
										_contents[i].id === this.state.selected_content_id
									) {
										_contents.splice(i, 1);
										break;
									}

									i = i + 1;
								}
								this.setState({
									contents: _contents,
									mode: 'welcome',
								});
								alert('deleted!');
							}
						} else {
							this.setState({
								mode: _mode,
							});
						}
					}.bind(this)}
				></Control>
				<TOC
					onChangePage={function (id) {
						this.setState({
							mode: 'read',
							selected_content_id: Number(id),
						});
					}.bind(this)}
					data={this.state.contents}
				></TOC>
				{this.getContent()}
			</div>
		);
	}
}

export default App;
