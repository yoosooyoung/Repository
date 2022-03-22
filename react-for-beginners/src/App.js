import { useState } from 'react';

function App() {
	//To-Do (문자열 초기화)
	const [toDo, setToDo] = useState('');
	//To-Do List (배열 초기화)
	const [toDos, setToDos] = useState([]);
	//To-Do를 입력하면 입력된 값이 세팅된다.
	const onChange = (event) => setToDo(event.target.value);
	//To-Do를 추가하면 입력창은 빈문자열이 되된다.
	const onSubmit = (event) => {
		event.preventDefault();
		if (toDo === '') {
			return;
		}
		//새로운 배열을 toDo와 이전배열을 가져온다.
		setToDos((currentArray) => [toDo, ...currentArray]);
		setToDo('');
	};
	const remove = (event) => {
		const index = event.target.value;
		toDos.splice(index, index + 1);
		setToDos([...toDos]);
	};
	return (
		<div>
			<h1>My To Dos ({toDos.length})</h1>
			<form onSubmit={onSubmit}>
				<input
					value={toDo}
					onChange={onChange}
					type="text"
					placeholder="할일을 적으세요"
				></input>
				<button>Add To Do</button>
			</form>
			<hr />
			<ul>
				{toDos.map((item, index) => (
					//toDos 배열에 있는 item을 가져온다.
					<li key={index}>
						{item}
						<button value={index} onClick={remove}>
							삭제
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
export default App;
