import React from "react";
import "./textBlock.scss";

export default function TextBlock(props) {
	return (
		<div className={`b-text-block b-text-block--${props.prefix}`}>
			<p>{props.text}</p>
		</div>
	);
};