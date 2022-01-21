import React, { Component } from 'react';

class TOC extends Component {
	//state값이 바뀌어도 호출되지 않게 하는 함수
	//render 이전에 호출된다.
	//false->app.js의 state가 바뀌어도 랜더링안된다.
	shouldComponentUpdate(newProps, newState) {
		//newProps -> 새롭게 바뀐값
		if (this.props.date === newProps.data) {
			return false;
		}
		return true;
	}
	render() {
		var lists = [];
		var data = this.props.data;
		var i = 0;
		while (i < data.length) {
			lists.push(
				<li key={data[i].id}>
					<a
						href={'/content/' + data[i].id}
						data-id={data[i].id}
						onClick={function (e) {
							e.preventDefault();
							//data-id에 접근하기 위해
							this.props.onChangePage(e.target.dataset.id);
						}.bind(this)}
					>
						{data[i].title}
					</a>
				</li>
			);
			i = i + 1;
		}
		return (
			<nav>
				<ul>{lists}</ul>
			</nav>
		);
	}
}

//TOC를 가져다 쓰는 js에서 사용할 수 있다.
export default TOC;
