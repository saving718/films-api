import classNames from "classnames";
import React from "react";
import "./burger.scss";
export default function Burger(props) {
	return (
		<div className={classNames("b-burger", {"b-burger--on": props.burgerState})} onClick={props.onClick} >
			<div className="burger">
				<div className="burger__stripe"></div>
			</div>
		</div>
	);
};