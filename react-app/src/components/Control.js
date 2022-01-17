import React, { Component } from 'react';

//subject라는 이름을 가진 Component를 만들겠다.
//Component를 만들 때 최상위 태그만 사용해야 한다.
class Control extends Component {
	render() {
		return (
			<ul>
				<li>
					<a
						href="/create"
						onClick={function (e) {
							e.preventDefault();
							this.props.onChangeMode('create');
						}.bind(this)}
					>
						create
					</a>
				</li>
				<li>
					<a
						href="/update"
						onClick={function (e) {
							e.preventDefault();
							this.props.onChangeMode('update');
						}.bind(this)}
					>
						update
					</a>
				</li>
				<li>
					<input
						type="button"
						value="delete"
						onClick={function (e) {
							e.preventDefault();
							this.props.onChangeMode('delete');
						}.bind(this)}
					></input>
				</li>
			</ul>
		);
	}
}

export default Control;
