import { useState, useEffect } from 'react';
//state가 변하면 랜더된다 -> componet가 처음 실행될때만 코드 실행
function App() {
	const [counter, setvalue] = useState(0);
	const [keyword, setKeyword] = useState('');
	const onClick = () => setvalue((prev) => prev + 1);
	const onChange = (event) => {
		setKeyword(event.target.value);
	};
	useEffect(() => {
		console.log('한번만 실행된다.');
	}, []);
	//keyword가 체인지되었을때만 변화하고싶은대 counter변화할때도 랜더링됨
	//console.log('검색', keyword);
	//keyword가 변화할때만 랜더링된다.
	//function, dependency
	useEffect(() => {
		if (keyword !== '' && keyword.length > 5) {
			console.log('키워드가 바뀐다.');
		}
	}, [keyword]);
	useEffect(() => {
		console.log('카운터가 바뀐다.');
	}, [counter]);
	return (
		<div>
			<input
				onChange={onChange}
				type="text"
				placeholder="검색"
				value={keyword}
			></input>
			<h1>{counter}</h1>
			<button onClick={onClick}>click me</button>
		</div>
	);
}

export default App;
