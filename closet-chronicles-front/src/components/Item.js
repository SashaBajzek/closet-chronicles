// @flow

import React from 'react';

const Item = ({ picture: string, status: string, onClick }) => (
	<li onClick={onClick}>
		<img />
		<p>Dirty? { status !== 'dirty' }</p>
		<p>Broken? { status !== 'broken' }</p>
	</li>
);

export default Item;