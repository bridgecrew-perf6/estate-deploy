import React, { useState } from 'react';
import { GrFavorite } from 'react-icons/gr';

import styles from './MenuItem.module.scss';

export const Favorite = () => {
	return (
		<div className={styles.menu_item}>
			<GrFavorite size={24} />
			Favorite
		</div>
	);
};
