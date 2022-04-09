import Movie from '../components/Movie';
import { useEffect, useState } from 'react';

function Home() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const getMovies = async () => {
		const response = await fetch(
			`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
		);
		const json = await response.json();
		setMovies(json.data.movies);
		setLoading(false);
	};
	useEffect(() => {
		getMovies();
	}, []);
	//react router 페이지를 전환하는 기술
	//home route -> 모든영화
	//
	return (
		<div>
			{loading ? (
				<h1>Loading....</h1>
			) : (
				<div>
					{movies.map((movie) => (
						//key는 react.js에만 map안에서 component들을 render할 때 사용
						//props를 보내는 작업
						<Movie
							key={movie.id}
							coverImg={movie.medium_cover_image}
							title={movie.title}
							summary={movie.summary}
							genres={movie.genres}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default Home;
