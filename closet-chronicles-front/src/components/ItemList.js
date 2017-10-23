// @flow

//NEED TO ADD FLOW PROPTYPES!!!!!!!!!!

import React from 'react';
import Item from './Item';

const ItemList = ({ items, onItemClick } => (
	<ul>
		{items.map((item, index) => (
		 	<Item key={index} {...item} onClick={() => onItemClick(index)} />
		 ))}
	</ul>
));

export default ItemList;