import { AnyAction } from 'redux';
import { exampleActionType } from './actionTypes';
type User = {
	id: string;
	name: string;
};

const initialState = {
	users: <Array<User>>[],
};

export const exampleReducer = (state = initialState, action: AnyAction) => {
	switch (action.type) {
		case exampleActionType.SET_USER:
			console.log('user reducer called');
			return { ...state, users: action.payload };
		case 'Test':
			console.log('test reducer called');
			return state;
		default:
			return state;
	}
};
