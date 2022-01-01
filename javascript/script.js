const hellos = document.getElementsByClassName('hello');
console.log(hellos); //HTMLCollection(3) [div.hello, div.hello, div.hello]

const div = document.getElementsByTagName('h1');
console.log(div); //HTMLCollection(3) [h1, h1, h1]

const title = document.querySelector('.hello h1');
console.log(title); //h1

const title2 = document.querySelectorAll('.hello h1');
console.log(title2); //NodeList(3) [h1, h1, h1]
