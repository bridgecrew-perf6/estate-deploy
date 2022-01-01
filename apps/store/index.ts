import { useMemo } from "react";
import {
	Action,
	AnyAction,
	applyMiddleware,
	CombinedState,
	compose,
	createStore,
	Store,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer } from 'redux-persist';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import storage from 'redux-persist/lib/storage';
import thunk, { ThunkDispatch, ThunkMiddleware } from 'redux-thunk';
import { rootReducer, RootState } from './rootReducer';

let store:
	| Store<any, AnyAction> & {
			dispatch: ThunkDispatch<
				CombinedState<{ example: {} }>,
				undefined,
				Action<any>
			>;
	  };

const encryptor = encryptTransform({
	secretKey: process.env.redux_SECRET || 'sxeeirjfdsk',
	onError(error) {
		console.log(error);
	},
});

const persistConfig = {
	key: 'root',
	storage,
	transforms: [encryptor],
	whitelist: ['example'], // persisting reducers ['reducerName']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const initialState = {};

function initStore(preloadedState = initialState) {
	if (process.env.NODE_ENV === 'development')
		return createStore(
			persistedReducer,
			preloadedState,
			composeWithDevTools(
				applyMiddleware(thunk as ThunkMiddleware<RootState, Action<any>>)
			)
		);
	if (process.env.NODE_ENV === 'production')
		return createStore(
			persistedReducer,
			preloadedState,
			compose(applyMiddleware(thunk as ThunkMiddleware<RootState, Action<any>>))
		);
}

export const initializeStore = (preloadedState: {} | undefined) => {
	let _store = store ?? initStore(preloadedState);

	// After navigating to a page with an initial Redux state, merge that state
	// with the current state in the store, and create a new store
	// if (preloadedState && store) {
	// 	_store = initStore({
	// 		...store.getState(),
	// 		...preloadedState,
	// 	});
	// 	// Reset the current store
	// 	// store = undefined;
	// }

	// For SSG and SSR always create a new store
	if (typeof window === 'undefined') return _store;
	// Create the store once in the client
	if (!store) store = _store;
	return _store;
};

export function useStore(initialState: any) {
	const store = useMemo(() => initializeStore(initialState), [initialState]);
	return store;
}

export type AppDispatch = typeof store.dispatch;
