import React from 'react';

import styles from './Details.module.scss';

export const DetailsItem = () => {
	return (
		<div className={styles.item}>
			<div className={styles.thumb}>
				<img
					src='https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg'
					alt=''
				/>
				<div>
					<h4>(New) 3 hours ago</h4>
				</div>
			</div>
			<div className={styles.details}>
				<h3>$ 12900</h3>
				<p className={styles.highlights}>3 Beds, 2 Baths, Lawn, 2500 sq feet</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
					consequuntur obcaecati tenetur.
				</p>
			</div>
		</div>
	);
};
