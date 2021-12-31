import React, { useState } from 'react';
import { IoMdSwap } from 'react-icons/io';

import styles from './MenuItem.module.scss';

const options = [
	{ label: 'English', value: 'us-en' },
	{ label: 'Bangla', value: 'bangla' },
];

export const Language: React.FC = () => {
	const [lang, setLang] = useState('english');
	const handleLang = () => {
		const switchToLang = lang === 'english' ? 'Bangla' : 'english';
		setLang(switchToLang);
	};
	return (
		<div className={styles.menu_item} onClick={handleLang}>
			{/* <GrLanguage size={20} /> */}
			<IoMdSwap size={20} />
			{lang === 'english' ? 'Bangla' : 'English'}
		</div>
	);
};
