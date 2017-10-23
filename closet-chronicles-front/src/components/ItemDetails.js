// @flow

import React from 'react';

const ItemDetails = ({ cost: number, lastWorn: number, picture: string, status: string, wearsTotal:number }) => (
	<section>
		<h1>Item Details</h1>
		<img />
		<p>Total Number of Wears: {wearstotal}</p>
		<p>Cost/Wear: {cost/wearsTotal}</p>
		<p>Last Worn: {lastWorn}</p>
		<p>Status: {status}</p>
	</section>
)

export default ItemDetails;