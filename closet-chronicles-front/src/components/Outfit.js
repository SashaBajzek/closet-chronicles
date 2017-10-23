// @flow;

import React from 'react';

const Outfit = ({ favorite: boolean, top, bottom, shoe, coat, accessory, onClick }) => (
	<li onClick={onClick}>
		<p>Top: {top.id}</p>
		<p>Bottom: {bottom.id}</p>
		<p>Shoe: {shoe.id}</p>
		<p>Coat: {coat.id}</p>
		<p>Accessory: {accessory.id}</p>
		<p>Favorite: {favorite}</p>
	</li>
);

export default Outfit;