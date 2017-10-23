// @flow

import React from 'react';
import Outfit from './Outfit';

const OutfitList = ({ outfits, onOutfitClick }) => (
	<ul>
		{outfits.map((outfit, index) => (
		 	<Outfit key={index} {...outfit} onClick={() => onOutfitClick(index)} />
		 ))}
	</ul>
);

export default OutfitList;