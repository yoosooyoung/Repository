import React, { Component } from 'react';
class CreateContent extends Component {
	render() {
		return (
			<article>
				<h2>Create</h2>
				<form
					action="/create_process"
					method="post"
					onSubmit={function (e) {
						//페이지가 바뀌는 것을 막음
						e.preventDefault();
						//app.js contents에 데이터를 추가한다.
						this.props.onSubmit(
							e.target.title.value,
							e.target.desc.value
						);
					}.bind(this)}
				>
					<p>
						<input type="text" name="title" placeholder="title"></input>
					</p>
					<p>
						<textarea name="desc" placeholder="description"></textarea>
					</p>
					<p>
						<input type="submit"></input>
					</p>
				</form>
			</article>
		);
	}
}
export default CreateContent;
