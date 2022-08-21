import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Writer() {
	const toList = window.localStorage.getItem('finallyList');
	var arr;
	if (toList == null) {
		arr = [];
	} else {
		arr = JSON.parse(toList);
	}
	const [toBoard, setToDo] = useState('');
	const onChange = (event) => setToDo(event.target.value);
	const [finallyList, setfinallList] = useState(arr);

	const onSubmit = (event) => {
		event.preventDefault();
		if (toBoard === '') {
			return;
		}
		var lastValue = JSON.parse(window.localStorage.getItem('finallyList'));
		var key = '';
		if (lastValue.length == 0) {
			key = 0;
		} else {
			key = lastValue[0].key + 1;
		}

		const userInput = { value: toBoard, key: key };
		setfinallList((currentArray) => [userInput, ...currentArray]);
		setToDo('');
		window.location.href = '/';
	};
	localStorage.setItem('finallyList', JSON.stringify(finallyList));

	return (
		<div className="inner">
			<h1>글쓰기</h1>
			<form>
				<h1>
					<textarea
						value={toBoard}
						onChange={onChange}
						type="text"
						className="board_style"
					></textarea>
				</h1>
				<button onClick={onSubmit}>확인</button>
				<button>
					<Link to={`/`}>목록</Link>
				</button>
			</form>
		</div>
	);
}
export default Writer;
