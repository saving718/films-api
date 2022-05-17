import React from "react";
import "./buttonAll.scss";

export default function ButtonAll(props) {
	return (
		<button className="b-button" onClick={props.onClick}>{props.text}</button>
	);
};