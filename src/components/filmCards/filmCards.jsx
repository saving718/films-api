import React from "react";
import axios from "axios";
import "./filmCards.scss";
import FilmCard from "../filmCard/filmCard";
import ButtonAll from "../buttonAll/buttonAll";

export default function FilmCards() {
	const [films, setFilms] = React.useState([]);
	const [count, setCount] = React.useState(8);
	
	React.useEffect(() => {
		const url = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top";
		axios({
			method: "get",
			url: url,
			headers: {
				"X-API-KEY": "5f5f926f-349a-41a3-aebd-13a113ea9538",
				"Content-Type": "application/json",
			},
		}).then((responce) => {
			const data = responce.data.films;
			setFilms(data);
		});
	}, []);

	const handleClick = (num) => {
		setCount(num);
	};
	return (
		<div className="b-films">
			<h2>Топ фильмов</h2>
			<div className="films__wrap">
				{films.map((elem, index) => (
					index < count ?
						<FilmCard
							key={elem.filmId}
							id={elem.filmId}
							poster={elem.posterUrl}
							index={index}
						></FilmCard>
						: null
				))}
			</div>
			
			{films.length > count ?
				<ButtonAll text='Показать еще' onClick={() => {handleClick(count + 8);}}></ButtonAll> 
				:
				<ButtonAll text='Скрыть' onClick={() => {handleClick(8);}}></ButtonAll> 
			}
		</div>

	);
}
