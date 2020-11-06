import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';

import { UserState, User } from './types';

let initialState: UserState = null;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: UserState, { payload }: PayloadAction<User>) => ({ ...payload }),
  },
});

export const { setUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
