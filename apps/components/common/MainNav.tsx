import React, { useState } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import { Language } from './Language';
import { Location } from './Location';

import styles from './MainNav.module.scss';

const MenuItem = () => (
	<>
		<li>
			<a href=''>Add Property</a>
		</li>
		<li>
			<a href=''>Blog</a>
		</li>
		<li>
			<a href=''>Service</a>
		</li>
		<li>
			<a href=''>About</a>
		</li>
		<li>
			<a href=''>Contact</a>
		</li>
	</>
);

export const MainNav = () => {
	const isMobile = useMediaQuery('(max-width: 760px)');
	const [mobileMenu, setMobileMenu] = useState(false);
	return (
		<div className={styles.site_title}>
			<div className={styles.container}>
				<div className={styles.right}>Sweet Home</div>
				<div className={styles.menus}>
					{isMobile ? (
						<button onClick={() => setMobileMenu(!mobileMenu)}>Menu</button>
					) : (
						<MenuItem />
					)}
				</div>
			</div>
			{isMobile && mobileMenu && 'Showing mobile menu'}
		</div>
	);
};

// Location, Language, Site Setting,          Favorite, Saved, Login
