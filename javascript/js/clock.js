const clock = document.querySelector('#clock');

function getClock() {
	const date = new Date();
	const hours = String(date.getHours()).padStart(2, '0');
	const minutes = String(date.getMinutes()).padStart(2, '0');
	const seconds = String(date.getSeconds()).padStart(2, '0');
	clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
//Interval(함수, 시간초); -> 1초마다 이벤트
setInterval(getClock, 1000);
