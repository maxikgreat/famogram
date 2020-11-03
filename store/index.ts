import { configureStore } from '@reduxjs/toolkit';
import { MakeStore, createWrapper, Context, HYDRATE } from 'next-redux-wrapper';

import { rootReducer, RootState } from './rootReducer';

const makeStore: MakeStore<RootState> = (context: Context) => 
  configureStore({
    reducer: rootReducer,
  });
// const store = configureStore({
//   reducer: rootReducer,
// });

export const wrapper = createWrapper<RootState>(makeStore, { debug: true });
