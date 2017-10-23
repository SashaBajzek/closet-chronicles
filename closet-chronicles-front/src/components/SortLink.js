// @flow

import React from 'react';

const SortLink = ({ active, children, onClick }) => {
	if (active) {
		return <span>{children}</span>
	}
	
	return (
		<a href="#" 
			onClick={e => {
				e.preventDefault();
				onClick();
			}}
		>
			{children}
		</a>
	)
}

export default SortLink;