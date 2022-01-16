import React from 'react';

import styles from './LandScapeItem.module.scss';

export const LandScapeItem = () => {
	return (
		<div className={styles.item}>
			<img src='/home.jpg' alt='' />
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
