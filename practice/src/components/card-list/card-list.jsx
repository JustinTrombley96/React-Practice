import React from 'react';

export const CardList = props => {
	return (
		<div>
			{console.log(props)}
			<h1>{props.children}</h1>
		</div>
	);
};
