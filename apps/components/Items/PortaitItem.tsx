import React from 'react';

import styles from './PortaitItem.module.scss';

export const PortaitItem = () => {
	return (
		<div className={styles.item}>
			<img
				src='https://upload.wikimedia.org/wikipedia/commons/2/2f/The_House_in_the_Clouds_-_geograph.org.uk_-_1588452.jpg'
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
