const title = document.querySelector('.hello:first-child h1');

function handleTitleClick() {
	const currentColor = title.style.color;
	let newColor;
	//파란색이면 토마토색으로, 토마토색이면 파란색으로
	if (currentColor == 'blue') {
		newColor = 'tomato';
	} else {
		newColor = 'blue';
	}
	title.style.color = newColor;
}

title.addEventListener('click', handleTitleClick);
