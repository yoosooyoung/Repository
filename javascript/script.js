const mon = 'mon';
const tue = 'tue';
const wed = 'wed';
const thu = 'thu';
const fri = 'fri';
const sat = 'sat';
const sun = 'sun';

const daysOfweek = mon + tue + wed + thu + fri + sat + sun;
console.log(daysOfweek); //montuewedthufrisatsun

//그룹화 array
const daysOfweek2 = [mon, tue, wed, thu, fri, sat, sun];
console.log(daysOfweek2); //(7) ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

//array에서 찾는 방법 다섯번째 element를 찾아주세요.
console.log(daysOfweek2[4]); // index는 0부터 시작한다.

//요일을 추가해보자
daysOfweek2.push('holiday');
console.log(daysOfweek2); //(8) ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun', 'holiday']

const playerName = 'nico';
const playerPoints = 1212;
const playerHandsome = true;
const playerFat = 'little bit';

//배열로 정리할 경우 player[0] == name
//const player = ['nico', 1212, true, 'little bit'];

//Object로 정리
const player = { name: 'nico', point: 1212, handsome: true, fat: 'little bit' };

console.log(player); //{name: 'nico', point: 1212, handsome: true, fat: 'little bit'}
console.log(player.name); //nico
console.log(player['name']); //nico

//list = 같은 의미를 가진다.
//Object = 무엇인지 알 수 없는 property가 있다.
