import React, { useState } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import { Language } from './Language';
import { Location } from './Location';
import { RiBarChartHorizontalFill } from 'react-icons/ri';
import { CgClose } from 'react-icons/cg';

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
						<span onClick={() => setMobileMenu(!mobileMenu)}>
							<RiBarChartHorizontalFill size={24} />
						</span>
					) : (
						<MenuItem />
					)}
				</div>
			</div>
			{isMobile && mobileMenu && (
				<div className={styles.mobile_menu}>
					<span onClick={() => setMobileMenu(!mobileMenu)}>
						<CgClose size={20} />
					</span>

					<MenuItem />
				</div>
			)}
		</div>
	);
};

// Location, Language, Site Setting,          Favorite, Saved, Login
