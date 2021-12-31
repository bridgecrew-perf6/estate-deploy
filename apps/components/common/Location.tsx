import React, { useState } from 'react';
import { MdOutlineLocationOn } from 'react-icons/md';

import styles from './MenuItem.module.scss';

export const Location = () => {
	return (
		<div className={`${styles.menu_item} ${styles.location}`}>
			<MdOutlineLocationOn size={24} />
			Bangladesh
		</div>
	);
};
