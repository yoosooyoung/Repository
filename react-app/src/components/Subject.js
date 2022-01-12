import React, { Component } from 'react';

//subject라는 이름을 가진 Component를 만들겠다.
//Component를 만들 때 최상위 태그만 사용해야 한다.
class Subject extends Component {
	render() {
		return (
			<header>
				<h1>
					<a href="/">{this.props.title}</a>
				</h1>
				{this.props.sub}
			</header>
		);
	}
}

export default Subject;
