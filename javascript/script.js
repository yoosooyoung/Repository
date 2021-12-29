//function이 없을 때
console.log('Hello my name is Nico'); //Hello my name is Nico
console.log('Hello my name is Dal'); //Hello my name is Dal
console.log('Hello my name is Shigatsu'); //Hello my name is Shigatsu
console.log('Hello my name is Flynn'); //Hello my name is Flynn

//function이 있을 때
function sayHello(name, age) {
	console.log('Hello my name is ' + name + 'and im ' + age);
}

//function실행
sayHello('Nico', 10); //Hello my name is Nicoand im 10
sayHello('Dal', 10); //Hello my name is Daland im 10
sayHello('Shigatsu', 20); //Hello my name is Shigatsuand im 20
