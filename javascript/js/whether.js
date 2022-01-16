const API_KEY = '06612029018230f3734bfb00b6414961';

function onGeoOk(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	//날씨정보를 json형식으로 받는다.
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const weather = document.querySelector('#weather span:first-child');
			const city = document.querySelector('#weather span:last-child');
			city.innerText = data.name;
			weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
		});
}
function onGeoError() {
	alert('날씨정보를 찾을 수 없습니다.');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//https://openweathermap.org/api
