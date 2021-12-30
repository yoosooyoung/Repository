const age = 20;

//한국나이를 계산하는 함수
//return -> 결과를 받고 싶다.
function calculateKrAge(ageOfForeigner) {
	return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age); //return값이 온다.

console.log(krAge); //22
