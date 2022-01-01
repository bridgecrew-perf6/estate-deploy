import React from 'react';

import styles from './LandScapeItem.module.scss';

export const LandScapeItem = () => {
	return (
		<div className={styles.item}>
			<img
				src='https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg'
				alt=''
			/>
			<div>
				<h2>Baker Street, London</h2>
				<div>
					{/* <button>Call Now</button> */}
					<button>View Homes</button>
				</div>
			</div>
		</div>
	);
};
