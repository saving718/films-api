import axios from "axios";
import React from "react";
import { Navigation, Autoplay }  from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Spinner from "../spinner/spinner";

export default function Carousel(props) {
	const [itemsData, setitemsData] = React.useState([]);
	const scrollRef = React.useRef();
	
	const delayData = (scrollPos) => {
		return new Promise(resolve => {
			if (scrollPos <= 300) {
				return resolve();
			}
			
			const scroll = () => {
				if (window.scrollY >= scrollPos) {
					resolve();
					window.removeEventListener("scroll", scroll);
				};
			};
			
			window.addEventListener("scroll", scroll);
		});
	};


	React.useEffect(() => {
		const posScroll = scrollRef.current.offsetTop;

		delayData(posScroll).then(() => {
			axios.all(props.itemData.map((item) => axios({
				method: "get",
				url: `https://kinopoiskapiunofficial.tech/${props.url}/${item}`,
				headers: {
					"X-API-KEY": "5f5f926f-349a-41a3-aebd-13a113ea9538",
					"Content-Type": "application/json",
				},
			}))).then(
				(responce) => {
					setitemsData(responce);
				},
			);
		});
	}, [props.itemData]);
	
	return (		
		<div
			ref={scrollRef}>
			{
				itemsData.length ?
					<Swiper 
						modules={[Navigation, Autoplay]}
						spaceBetween={10}
						navigation={props.navigation}
						slidesPerView={props.lenSlide}
						breakpoints={props.breakpoints}
						autoplay={{
							delay: 4500,
							disableOnInteraction: false,
						}}
					>
						{itemsData.map(((item, index) => (
							<SwiperSlide key={index}>
								<div className="swiper-col-left">
									<img src={item.data.posterUrl} alt={item.data.nameEn}/>
								</div>

								<div className="swiper-col-right">
									<p>{item.data.nameRu}</p>
									{ props.description  ?
										<div className="swiper-description">
											<div className="swiper-description-name">{ item.data.description }</div>
											<a href={item.data.webUrl}>Смотреть на кинопоиске</a>
										</div> 
										: null 
									}
								</div>
							</SwiperSlide>
						)))}
					</Swiper> 
					:	
					<Spinner/>
			}
		</div>
	);
};