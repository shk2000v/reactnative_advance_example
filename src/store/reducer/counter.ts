import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialState = {
  count: number;
};

const initialState: InitialState = {
  count: 0,
};

export const Slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    add(state, { payload }: PayloadAction<{ addNumber: number }>) {
      state.count = state.count + payload.addNumber;
    },
  },
});

export const { add, decrement, increment } = Slice.actions;

const CounterReducer = Slice.reducer;

export default CounterReducer;
