const title = document.querySelector('.hello:first-child h1');

function handleTitleClick() {
	//변수를 활용하면 오류를 줄일 수 있다.
	const clickedClass = 'active';

	//if (title.className === clickedClass) {
	//if (title.classList.contains(clickedClass)) {
	//버그 : 기존 class를 대체한다.
	//title.className = '';
	//title.classList.remove(clickedClass);
	//} else {
	//title.className = clickedClass
	//title.classList.add(clickedClass);
	//}
	title.classList.toggle('active');
}

title.addEventListener('click', handleTitleClick);

//style은 css, animation은 javascript
