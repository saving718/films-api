import React from "react";
import "./bannerCarousel.scss";
import Carousel from "../carousel/carousel";

export default function BannerCarousel() {
	const films = [1234853, 4467988];
    
	return (
		<div className="b-films-carousel">
			<div className="films-carousel__wrap">
				<Carousel 
					itemData={films}
					url="api/v2.2/films"
					lenSlide={1}
					description={true}
					navigation={false}
				></Carousel>
			</div>
		</div>
	);
};