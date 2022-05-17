import React from "react";
import "./main.scss";
import FilmCards from "../filmCards/filmCards";
import ActorsCarousel from "../ActorsCarousel/ActorsCarousel";
import BannerCarousel from "../BannerCarousel/bannerCarousel";
import TextBlock from "../textBlock/textBlock";

export default function Main() {
	return (
		<div className="l-main">
			<div className="main">
				<div className="main__wrap">
					<BannerCarousel></BannerCarousel>
					<TextBlock prefix={"about"} text={"Здесь собраны лучшие фильмы и актеры кинопоиска. От лучших кинолент в HD-качестве вас отделяет буквально один клик. Мы не просто освобождаем от необходимости идти в кинотеатр или изучать программу телепередач – у посетителей нашего ресурса гораздо больше возможностей."}/>
					<FilmCards></FilmCards>
					<ActorsCarousel></ActorsCarousel>
				</div>
			</div>			
		</div>
	);
};