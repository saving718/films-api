import React from "react";
import classNames from "classnames";
import { Link } from "react-scroll";
import "./menu.scss";


export default function Menu(props) {

	return (
		<nav className={classNames("b-menu", {[`b-menu--${props.prefix}`]: props.prefix})}>
			<div className="menu__wrap">
				{props.itemsMenu.map(item => (
					<Link className="menu__item" onClick={props.onClick} key={item.id} to={item.element} spy={true} smooth={true} offset={-10} duration={500}>{item.title}</Link>
				))}
			</div>
		</nav>
	);
};