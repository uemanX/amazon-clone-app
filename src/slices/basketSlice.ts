import { RootState } from '@/app/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type BasketState = {
  count: number;
};

const initialState: BasketState = {
  count: 0,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.count = state.count + action.payload;
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.count = state.count - action.payload;
    },
  },
});

export const { increment, decrement } = basketSlice.actions;

export const selectCount = (state: RootState) => state.basket.count;

export default basketSlice.reducer;
