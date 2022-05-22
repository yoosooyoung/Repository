import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Write } from './Home.js';

function Home(toList) {
	toList = ['a'];
	const id = 0;
	return (
		<div>
			<h1>List</h1>
			{toList == null ? (
				''
			) : (
				<div>
					{toList.map((item, index) => (
						<li key={index}>
							<Link to={`view`}>{item}</Link>
						</li>
					))}
				</div>
			)}

			<form>
				<button>
					<Link to={`write`}>글쓰기</Link>
				</button>
			</form>
		</div>
	);
}
export default Home;
