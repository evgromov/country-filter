import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../../../app/store';
import { CountryItem } from '../interfaces';

export interface CountryState {
  countryCode: string;
  selectedCountry: CountryItem[] | [];
}

const initialState: CountryState = {
  countryCode: 'EE',
  selectedCountry: [],
};

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    addCountryCode: (state, action: PayloadAction<string>) => {
      state.countryCode = action.payload;
    },
    addCountry: (state, action: PayloadAction<CountryItem[]>) => {
      state.selectedCountry = action.payload;
    },
  },
});

export const { addCountry, addCountryCode } = countrySlice.actions;
export const selectCountryCode = (state: RootState) => state.country.countryCode;
export const selectCountry = (state: RootState) => state.country.selectedCountry;

export default countrySlice.reducer;
