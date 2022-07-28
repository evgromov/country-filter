import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import countryReducer from '../components/CountryFilter/reducer/countrySlice';

export const store = configureStore({
  reducer: {
    country: countryReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
