import { combineReducers } from '@reduxjs/toolkit'

import { counterReducer } from './counter';
import { userReducer } from './user';

export const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;