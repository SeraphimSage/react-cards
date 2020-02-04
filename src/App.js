import React from "react";

const CardGroup = props => <div className="cardGroup">{props.children}</div>;

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

const App = () => (
	<CardGroup>
		<Card description="Trial" icon="fa-thumbs-o-up" price="Free!" />
		<Card
			description="Basic"
			hint="most popular"
			icon="fa-trophy"
			price="$10.00"
		/>
		<Card
			description="Advanced tier"
			hint="only for enterprise-level professionals"
			icon="fa-bolt"
			price="$6,000.00"
		/>
	</CardGroup>
);

export default App;
