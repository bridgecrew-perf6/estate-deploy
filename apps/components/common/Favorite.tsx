import useMediaQuery from 'apps/hooks/useMediaQuery';
import React, { useState } from 'react';
import { GrFavorite } from 'react-icons/gr';

import styles from './MenuItem.module.scss';

export const Favorite = () => {
	const isMobile = useMediaQuery('(max-width: 760px)');

	return (
		<div className={styles.menu_item_left}>
			<GrFavorite size={24} />
			{!isMobile && 'Favorite'}
		</div>
	);
};
