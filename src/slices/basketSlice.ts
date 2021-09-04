import { RootState } from '@/app/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type BasketState = {
  items: [];
};

const initialState: BasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {},
    removeFromBasket: (state, action) => {},
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectItems = (state: RootState) => state.basket.items;

export default basketSlice.reducer;
