//input
const loginInput = document.querySelector('#login-form input');
//button
const loginButton = document.querySelector('#login-form button');
const loginForm = document.querySelector('#login-form');
//h1
const greeting = document.querySelector('#greeting');

//a link
const link = document.querySelector('a');
//hidden class, String만 포함된 변수는 대문자로 작성하는 관습
const HIDDEN_CLASSNAME = 'hidden';
const USER_NAME = 'username';

//info(argument)는 실행된 event에 대한 정보이다.
function onLoginSubmit(info) {
	//유효성검사 -> html로 속성으로 만듬 (필수입력, 15자이하입력)

	//event의 기본행동을 막는다.
	info.preventDefault();
	//click을 누르면 class에 hidden추가한다.
	loginForm.classList.add(HIDDEN_CLASSNAME);
	const username = loginInput.value;
	//브라우저가 기억해주는 기능 local storage (key,value)
	localStorage.setItem(USER_NAME, username);
	paintGreetings(username);
}

function paintGreetings(username) {
	//변수와 String의 결합
	greeting.innerText = `안녕하세요. ${username}`;
	//h1의 class를 제거한다
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USER_NAME);

if (savedUsername === null) {
	//null이면 form이 보여야한다.
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener('submit', onLoginSubmit);
} else {
	//null이 아니면 form이 안보여야한다.
	paintGreetings(savedUsername);
}
