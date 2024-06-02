import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {RootState} from './store';
import {Action, ThunkDispatch} from '@reduxjs/toolkit';

export type AppThunkDispatch = ThunkDispatch<RootState, any, Action>;
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
