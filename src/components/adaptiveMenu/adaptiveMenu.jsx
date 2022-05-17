import classNames from "classnames";
import React from "react";
import Menu from "../menu/menu";
import "./adaptiveMenu.scss";

export default function AdaptiveMenu(props) {
	const itemsMenu = [
		{id:0,title: "О нас", element: "b-text-block--about"},
		{id:1,title: "Фильмы", element: "b-films"},
		{id:2,title: "Актеры", element: "b-actors"}
	];

	return (
		<div className="b-adaptive-menu">
			<div className={classNames("adaptive-menu", {"adaptive-menu--on": props.menuState})}>
				<Menu itemsMenu={itemsMenu} prefix={"adaptive"} onClick={props.onClick}></Menu>
			</div>
		</div>
	);
};