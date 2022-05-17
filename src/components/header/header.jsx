import React from "react";
import "./header.scss";
import Menu from "../menu/menu";
import Logo from "../logo/logo";
import Burger from "../burger/burger";
import AdaptiveMenu from "../adaptiveMenu/adaptiveMenu";

export default function Header() {
	const [onMenuState, setOnMenuState] = React.useState(false);
	const itemsMenu = [
		{id:0,title: "О нас", element: "b-text-block--about"},
		{id:1,title: "Фильмы", element: "b-films"},
		{id:2,title: "Актеры", element: "b-actors"}
	];

	const onMenu = () => {
		if (!onMenuState) {
			setOnMenuState(true);
			return document.body.classList.add("no-scroll");
		}
		setOnMenuState(false);
		document.body.classList.remove("no-scroll");
	};

	return (
		<div className="l-header">
			<div className="header">
				<div className="header__wrap">
					<Logo/>
					<Menu itemsMenu={itemsMenu}></Menu>
					<Burger onClick={onMenu} burgerState={onMenuState}/>
					<AdaptiveMenu onClick={onMenu} menuState={onMenuState}/>
				</div>
			</div>
		</div>
	);
};