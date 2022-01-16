//form
const toDoForm = document.getElementById('todo-form');
//input
const toDoInput = toDoForm.querySelector('input');
//ul
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';

//저장할 리스트
let toDos = [];

function saveToDos() {
	//array형식으로 저장한다.
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newTodo) {
	//li를만듬
	const li = document.createElement('li');
	li.id = newTodo.id;
	//span을 만듬
	const span = document.createElement('span');
	//button
	const button = document.createElement('button');
	//li안에 span, button을 넣음
	li.appendChild(span);
	li.appendChild(button);
	span.innerText = newTodo.text;
	button.innerText = 'x';
	button.addEventListener('click', deleteToDo);
	toDoList.appendChild(li);
}

function deleteToDo(event) {
	//클릭된 부모 (li)
	const li = event.target.parentElement;
	li.remove();
	//지우고 싶은 item을 제외한다
	//배열만큼 반복된다. -> true면 유지, false면 제외
	toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
	//새로운 배열을 저장한다.
	saveToDos();
}

function handleTodoSubmit(event) {
	event.preventDefault();
	//입력값을 복사한다.
	const newTodo = toDoInput.value;
	//입력값을 빈값으로 만든다.
	toDoInput.value = '';
	const newTodoObj = {
		text: newTodo,
		id: Date.now(),
	};
	//lacalStorage의 배열
	toDos.push(newTodoObj);
	//화면 li
	paintToDo(newTodoObj);
	saveToDos();
}
toDoForm.addEventListener('submit', handleTodoSubmit);

//localStorage에 저장된 내용
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos != null) {
	//String으로 만듬
	const parsedToDos = JSON.parse(savedToDos);
	toDos = parsedToDos;
	//item을 인자로 넘기고 하나씩 반복한다.
	parsedToDos.forEach(paintToDo);
}
