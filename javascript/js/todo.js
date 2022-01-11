const toDoForm = document.getElementById('todo-form');
const toDoList = document.getElementById('todo-list');

function handleTodoSubmit(event) {
	event.preventDefault();
}
toDoForm.addEventListener('submit', handleTodoSubmit);
