import React, { useState } from 'react';
import { GrLanguage } from 'react-icons/gr';
import Select from 'react-select';

import styles from './MenuItem.module.scss';

const options = [
	{ label: 'En', value: 'us-en' },
	{ label: 'Bn', value: 'bangla' },
];

export const Language: React.FC = () => {
	const [lang, setLang] = useState('us-en');

	return (
		<div className={styles.menu_item}>
			<GrLanguage size={20} />
			{/* <Select
				options={options}
				defaultValue={options.filter((option) => option.label === 'us-en')}
				onChange={(e) => setLang(e.value)}
				placeholder='En'
			/> */}
			En
			{/* {lang} */}
		</div>
	);
};
