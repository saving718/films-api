import React from "react";
import "./footer.scss";
import Logo from "../logo/logo";
import Menu from "../menu/menu";


export default function Footer() {

	const itemsMenu = [
		{id:0,title: "Главная", element: "app"},
		{id:1,title: "О нас", element: "b-text-block--about"},
		{id:2,title: "Фильмы", element: "b-films"},
	];

	return (
		<div className="l-footer">
			<div className="footer__wrap">
				<Logo></Logo>
				<Menu prefix={"column"} itemsMenu={itemsMenu}></Menu>
			</div>
		</div>
	);
};