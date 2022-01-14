import React, { Component } from 'react';

class TOC extends Component {
	render() {
		var lists = [];
		var data = this.props.data;
		var i = 0;
		while (i < data.length) {
			lists.push(
				//Each child in a list should have a unique
				//여려개의 목록을 자동으로 생성할 때는 react는 key값을 요구한다.
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
