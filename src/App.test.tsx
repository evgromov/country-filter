import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import makeGraphRest from './app/helper';
import { createFilterQuery, createFilterSettings } from './components/CountryFilter/countryFilterOptions';
import { addCountryCode, addCountry } from './components/CountryFilter/reducer/countrySlice';
import { CountryFilter } from './components/CountryFilter/CountryFilter';

window.matchMedia = window.matchMedia || function getByText() {
  return {
    matches: false,
    addListener() {
    },
    removeListener() {
    },
  };
};

test('Render main page test - widget block', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  expect(getByText(/type/i)).toBeInTheDocument();
});

describe('Redux tests', () => {
  it('check redux action - addCountry', () => {
    expect(addCountry([{ name: 'Estonia', code: 'EE' }]))
      .toStrictEqual({
        payload: [{ code: 'EE', name: 'Estonia' }],
        type: 'country/addCountry',
      });
  });

  it('check redux action - addCountryCode', () => {
    expect(addCountryCode('EE')).toStrictEqual({ payload: 'EE', type: 'country/addCountryCode' });
  });
});

describe('GraphQl tests', () => {
  it('check create filter function (for GraphQl request)', () => {
    expect(createFilterSettings('EE')).toEqual({
      filter: { code: { eq: 'EE' } },
    });
  });

  it(
    'test GraphQl request with filter options',
    () => makeGraphRest(createFilterQuery, createFilterSettings('EE')).then((data) => {
      expect(data).toStrictEqual({
        data: {
          countries: [{
            name: 'Estonia',
            code: 'EE',
          }],
        },
      });
    }),
  );
});

expect(CountryFilter).toMatchSnapshot();
