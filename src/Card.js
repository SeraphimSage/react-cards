import React from "react"

const Card = props => (
	<div className="card cardGroup__card">
		<div className="card__description cardGroup__cardDescription">
			<div className={"icon fa " + props.icon + " card__descriptionIcon"} />
			<div className="card__descriptionText">
				{props.description}
				<br />
				{props.hint && "(" + props.hint + ")"}
			</div>
		</div>
		<div className="card__price">{props.price}</div>
	</div>
);

export default Card;