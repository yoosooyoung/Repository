const input = require('fs')
	.readFileSync('/javasrcipt/input.txt')
	.toString()
	.split(' ');
const A = parseInt(input[0]);
// 04. 위에서 절단한 배열의 첫번째 값을 B에 저장
const B = parseInt(input[1]);

console.log(A + B);
