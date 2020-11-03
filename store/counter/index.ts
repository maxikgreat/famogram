import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CounterState } from './types';

const initialState: CounterState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'couter',
  initialState,
  reducers: {
    inc(state) {
      state.value++;
    },
    dec(state) {
      state.value--;
    },
    incMore(state, { payload }: PayloadAction<number>) {
      state.value += payload;
    }
  },
})

export const { inc, dec, incMore } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
