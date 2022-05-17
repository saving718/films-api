import React from "react";
import axios from "axios";

export default function FilmCardBack(props) {
	const [dataFilm, setDataFilm] = React.useState([]);
	React.useEffect(() => {
		const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${props.id}`;
		axios({
			method: "get",
			url: url,
			headers: {
				"X-API-KEY": "5f5f926f-349a-41a3-aebd-13a113ea9538",
				"Content-Type": "application/json",
			},
		}).then((responce) => {
			const data = responce.data;
			setDataFilm(data);
		});
		return () => {
			setDataFilm([]);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="film-card__back-content">
			<div className="film-card__back-title">
				{dataFilm.nameRu}
			</div>
			<div className="film-card__back-description">
				{dataFilm.shortDescription}
			</div>
			<a href={dataFilm.webUrl} target="_blank" rel="noreferrer">
				Смотреть на кинопоиске
			</a>
		</div>
	);
}
