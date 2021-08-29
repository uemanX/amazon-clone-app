import basketReducer, { BasketState } from '@/slices/basketSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

export type AppState = {
  basket: BasketState;
};

const rootReducer = combineReducers<AppState>({
  basket: basketReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
