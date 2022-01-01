import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../rootReducer';

export type thunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
