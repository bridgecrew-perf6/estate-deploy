import React from 'react';

import styles from './PortaitItem.module.scss';

export const PortaitItem = () => {
	return (
		<div className={styles.item}>
			<img
				src='https://cdn.pixabay.com/photo/2017/10/24/11/32/home-2884259_1280.png'
				alt=''
			/>
			<div>
				<h2>Rocky Beach, CA</h2>
				{/* <button>Call Now</button> */}
				<div>
					<button>View Homes</button>
				</div>
			</div>
		</div>
	);
};
