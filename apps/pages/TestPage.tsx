import React, { useState } from 'react';
import styles from './test.module.scss';

import * as api from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../store/example/action';

export const TestPage = () => {
	const { users } = useSelector((state) => state.example);

	const dispatch = useDispatch();
	const getUsers = () => {
		console.log('getting users..');
		dispatch(setUsers);
	};

	return (
		<div className={styles.test}>
			<h2 className={styles.heading}>This is Test Page</h2>
			<button onClick={getUsers}>Get Users ({users.length}) </button>
			{users.map((user) => (
				<li key={user.id}>{user.name}</li>
			))}
		</div>
	);
};
