import React from "react";
import Carousel from "../carousel/carousel";
import "./ActorsCarousel.scss";

export default function ActorsCarousel() {
	const actors = [7846, 6245, 1682023, 20866, 37859, 25584];
	const breakpoints= {
		320: {
		  slidesPerView: 1,
		},
		420: {
		  slidesPerView: 2,
		},
		700: {
			slidesPerView: 3,
		},
		1100: {
			slidesPerView: 4,
		},
		1200: {
			slidesPerView: 5,
		},
	  };

	return (
		<div className="b-actors">
			<h2>Популярные актеры</h2>
			<Carousel 
				itemData={actors}
				url="/api/v1/staff/"
				description={false}
				navigation={true}
				breakpoints={breakpoints}
			></Carousel>
		</div>
	);
};