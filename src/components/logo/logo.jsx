import logo from "../../image/logo.svg";

import React from "react";
import "./logo.scss";

export default function Logo() {
	
	return (
		<div className="b-logo">
			<img src={logo} alt="logo" />
			<p>Films with <span>Kinopoisk</span></p>
		</div>
	);
};