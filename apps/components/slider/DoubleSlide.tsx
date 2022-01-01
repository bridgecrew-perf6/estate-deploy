import React from 'react';
import { LandScapeItem } from '../Items/LandScapeItem';

export const DoubleSlide = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				height: '400px',
			}}
		>
			<LandScapeItem />
			<LandScapeItem />
		</div>
	);
};
