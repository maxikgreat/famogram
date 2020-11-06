import { configureStore } from '@reduxjs/toolkit';
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';

import { rootReducer, RootState } from './rootReducer';

const makeStore: MakeStore = (context: Context) => configureStore({
  reducer: rootReducer,
});

export const wrapper = createWrapper<RootState>(makeStore, { debug: true });