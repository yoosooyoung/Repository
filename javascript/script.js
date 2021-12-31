const age = parseInt(prompt('how old are you?'));
if (isNaN(age) || age < 0) {
	//조건 === true
	console.log('숫자를 확인해주세요.');
} else if (age < 18) {
	console.log('너는 어리다.');
} else if (age >= 18 && age <= 50) {
	console.log('음주 가능합니다.');
} else if (age > 50 && age <= 80) {
	console.log('운동해야합니다.');
} else {
	//위의 네 조건이 false일 때
	console.log('음주를 하면 위험합니다.');
}
