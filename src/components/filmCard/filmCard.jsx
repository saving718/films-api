import classNames from "classnames";
import React from "react";
import FilmCardBack from "../filmCardBack/filmCardBack";
import "./filmCard.scss";

export default function FilmCard(props) {
	const [cardState, setCardState] = React.useState(false);
	return (
		<div className="b-film-card">
			<div
				className={classNames("film-card", {"film-card--on": cardState})}
				onClick={() => { cardState ? setCardState(false): setCardState(true);}}
			>
				<div className="film-card__wrap">
					<div className="film-card__front">
						<img src={props.poster} alt="" />
					</div>
					<div className="film-card__back">
						{cardState === true ? <FilmCardBack id={props.id}></FilmCardBack> : null}
					</div>
				</div>
			</div>
		</div>
	);
}
