import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './Detail.module.css';
function Detail() {
	const [movie, setMovie] = useState({});
	const { id } = useParams();
	const getMovie = async () => {
		const json = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		setMovie(json.data.movie);
	};
	useEffect(() => {
		getMovie();
	}, []);

	return (
		<div>
			<button className={styles.button}>
				<Link to="/">Home</Link>
			</button>
			<h1>{movie.title}</h1>
			<img
				src={movie.large_cover_image}
				alt={movie.title}
				className={styles.movie__img}
			/>
			<h2>{movie.year}</h2>
			<h2>{movie.genres}</h2>
			<p>{movie.description_full}</p>
		</div>
	);
}
export default Detail;
