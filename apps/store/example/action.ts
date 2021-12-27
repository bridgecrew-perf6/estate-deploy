import * as api from '../../api';
import { exampleActionType } from './actionTypes';

// if the action passes an parameter this function will have to write like this way
// export const setUsers = (user) => async (dispatch) =>
export const setUsers = async (dispatch) => {
	try {
		const res = await api.getUsers();
		dispatch({
			type: exampleActionType.SET_USER,
			payload: res?.data,
		});
	} catch (error) {
		console.log(error);
	}
};
