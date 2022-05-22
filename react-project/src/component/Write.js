import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Writer() {
	const [toBoard, setToDo] = useState('');
	const [toList, setList] = useState([]);
	const onChange = (event) => setToDo(event.target.value);
	const onSubmit = (event) => {
		event.preventDefault();
		if (toBoard === '') {
			return;
		}
		setList((currentArray) => [toBoard, ...currentArray]);
		setToDo('');
	};
	return (
		<div className="inner">
			<h1>글쓰기</h1>
			<form onSubmit={onSubmit}>
				<h1>
					<textarea
						value={toBoard}
						onChange={onChange}
						type="text"
						className="board_style"
					></textarea>
				</h1>
				<button>확인</button>
				<button>
					<Link to={`/`}>목록</Link>
				</button>
			</form>
		</div>
	);
}
export default Writer;
