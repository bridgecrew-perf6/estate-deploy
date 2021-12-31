import useMediaQuery from 'apps/hooks/useMediaQuery';
import { useRouter } from 'next/router';
import React from 'react';
import { CgProfile } from 'react-icons/cg';

import styles from './MenuItem.module.scss';

export const Login = () => {
	const isMobile = useMediaQuery('(max-width: 760px)');
	console.log(isMobile);
	const router = useRouter();
	const gotoLogin = () => {
		router.push('/login');
	};
	return (
		<div className={styles.menu_item_left} onClick={gotoLogin}>
			<CgProfile size={24} />
			{isMobile}
			{!isMobile && 'Login'}
		</div>
	);
};
