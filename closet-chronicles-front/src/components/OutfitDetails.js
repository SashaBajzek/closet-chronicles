// @flow

import React from 'react';

const OutfitDetails = ({ favorite: boolean, top, bottom, shoe, coat, accessory, lastWorn: number, wearsTotal }) => (
	<section>
		<h1>Outfit Details</h1>
		<section>
			<p>Top: {top.id}</p>
			<p>Bottom: {bottom.id}</p>
			<p>Shoe: {shoe.id}</p>
			<p>Coat: {coat.id}</p>
			<p>Accessory: {accessory.id}</p>
			<p>Favorite: {favorite}</p>
		</section>
		<section>
			<p>Total Number of Wears: </p>
			<p>Cost/Wear: {(top.cost + bottom.cost + shoe.cost + coat.cost + accessory.cost)/wearsTotal}</p>
			<p>Last Worn: {lastWorn}</p>
		</section>
	</section>
);

export default OutfitDetails;