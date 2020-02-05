import React from "react";
import Card from "./Card.js"
import CardGroup from "./CardGroup.js"

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
