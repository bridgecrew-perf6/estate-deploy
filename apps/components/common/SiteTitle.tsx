import React from 'react';
import { Favorite } from './Favorite';
import { Language } from './Language';
import { Location } from './Location';
import { Login } from './Login';

import styles from './SiteTitle.module.scss';

export const SiteTitle = () => {
	return (
		<div className={styles.site_title}>
			<div className={styles.container}>
				<div className={styles.right}>
					<Location />
					<Language />
				</div>
				<div>
					<Favorite />
					<Login />
				</div>
			</div>
		</div>
	);
};

// Location, Language, Site Setting,          Favorite, Saved, Login
