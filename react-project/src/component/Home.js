import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

function Home() {
	const toList = window.localStorage.getItem('finallyList');
	var arr;
	if (toList == null) {
		arr = [];
	} else {
		arr = JSON.parse(toList);
	}
	const [parsedToDos, setParsed] = useState(arr);
	const onSubmit = (item, e) => {
		e.preventDefault();
		if (!window.confirm('삭제하시겠습니까?')) {
			alert('취소되었습니다.');
		} else {
			var newArray = parsedToDos.filter(
				(storageItem) => storageItem.key !== item.key
			);
			localStorage.removeItem('finallyList');

			if (newArray.length !== 0) {
				localStorage.setItem('finallyList', JSON.stringify(newArray));
			} else {
				localStorage.setItem('finallyList', JSON.stringify([]));
			}
			setParsed(JSON.parse(window.localStorage.getItem('finallyList')));
		}
	};

	const [checkedList, setCheckedLists] = useState([]);

	// 전체 체크 클릭 시 발생하는 함수
	const onCheckedAll = useCallback(
		(checked) => {
			if (checked) {
				const checkedListArray = [];

				parsedToDos.forEach((list) => checkedListArray.push(list));

				setCheckedLists(checkedListArray);
			} else {
				setCheckedLists([]);
			}
		},
		[parsedToDos]
	);

	// 개별 체크 클릭 시 발생하는 함수
	const onCheckedElement = useCallback(
		(checked, list) => {
			if (checked) {
				setCheckedLists([...checkedList, list]);
			} else {
				setCheckedLists(checkedList.filter((el) => el !== list));
			}
		},
		[checkedList]
	);

	const delList = (e) => {
		e.preventDefault();
		var delList = checkedList;
		for (var i in delList) {
			const toList = JSON.parse(window.localStorage.getItem('finallyList'));
			var newArray = toList.filter(
				(storageItem) => storageItem.key !== delList[i].key
			);
			localStorage.removeItem('finallyList');
			if (newArray.length !== 0) {
				localStorage.setItem('finallyList', JSON.stringify(newArray));
			} else {
				localStorage.setItem('finallyList', JSON.stringify([]));
			}
		}
		setCheckedLists([]);
		setParsed(JSON.parse(window.localStorage.getItem('finallyList')));
	};
	return (
		<div className="inner">
			<h1>List</h1>
			<ul className="li_style">
				<li>
					<div>
						<input
							type="checkbox"
							onChange={(e) => onCheckedAll(e.target.checked)}
							checked={
								checkedList.length === 0
									? false
									: checkedList.length === parsedToDos.length
									? true
									: false
							}
						></input>
					</div>
					<div>번호</div>
					<div>제목</div>
					<div>기능</div>
				</li>
			</ul>
			<ul className="li_style">
				{parsedToDos.length != 0 ? (
					parsedToDos.map((item, index) => (
						<li key={index}>
							<div>
								<input
									key={item.id}
									type="checkbox"
									onChange={(e) =>
										onCheckedElement(e.target.checked, item)
									}
									checked={checkedList.includes(item) ? true : false}
								/>
							</div>
							<div>{item.key}</div>
							<div>
								<Link to={`view/` + item.key}>{item.value}</Link>
							</div>
							<div>
								<button
									onClick={(e) => {
										onSubmit(item, e);
									}}
								>
									삭제
								</button>
							</div>
						</li>
					))
				) : (
					<li className="empty">
						<div>글이 없습니다.</div>
					</li>
				)}
			</ul>
			<form>
				<button>
					<Link to={`write`}>글쓰기</Link>
				</button>
				<button onClick={delList}>삭제</button>
			</form>
		</div>
	);
}
export default Home;
