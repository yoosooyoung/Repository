const quotes = [
	{
		quote: '교육 없는 천재는 광산 속의 은이나 마찬가지이다',
		author: '벤자민 프랭클린',
	},
	{
		quote: '배우나 생각하지 않으면 공허하고, 생각하나 배우지 않으면 위험하다',
		author: '공자',
	},
	{
		quote: '정직과 미덕의 샘이자 근원은 훌륭한 교육에 있다',
		author: '플루타르코스',
	},
	{
		quote: '실천이 말보다 낫다.',
		author: '벤자민 프랭클린',
	},
	{
		quote: '행동은 말보다 더 새빨간 거짓말을 한다.',
		author: '캐롤린 웰스 명언',
	},
	{
		quote: '나는 폭풍이 두렵지 않다. 나의 배로 항해하는 법을 배우고 있으니까',
		author: '헬렌 켈러',
	},
	{
		quote: '행동만이 삶에 힘을 주고, 절제만이 삶에 매력을 준다.',
		author: '장 폴 리히터',
	},
	{
		quote: '아이들이 무엇을 할 수 있는지 확인해보고 싶다면 주는 것을 멈추어 보면 된다.',
		author: '노먼 더글러스',
	},
	{
		quote: '실패하는 길은 여럿이나 성공하는 길은 오직 하나다.',
		author: '아리스토텔레스',
	},
	{
		quote: '사람은 실패가 아니라 성공하기 위해 태어난다.',
		author: '헨리 데이비드 소로우',
	},
	{
		quote: '헨리 데이비드 소로우',
		author: '진 니데치',
	},
	{
		quote: '그건 할 수 없어라는 말을 들을 때마다 나는 성공이 가까웠음을 안다.',
		author: '마이클 플래틀리',
	},
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

//Math function
//반올림
Math.round(1.6); //2
//올림
Math.ceil(2.3); //3
//내림
Math.floor(2.6); //2
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
