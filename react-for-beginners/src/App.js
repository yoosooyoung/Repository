import React, { useState, useEffect } from 'react';
//state가 변하면 랜더된다 -> componet가 처음 실행될때만 코드 실행
function App() {
	const [counter, setvalue] = useState(0);
	const onClick = () => setvalue((prev) => prev + 1);
	console.log('run');
	//다시실행되지 않을 함수를 넣어줌
	useEffect(() => {
		console.log('i run only once');
	}, []);
	return (
		<div>
			<h1>{counter}</h1>
			<button onClick={onClick}>click me</button>
		</div>
	);
}

export default App;
