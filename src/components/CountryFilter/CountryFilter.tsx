import React from 'react';
import CountryTable from './modules/CountryTable';
import CountryInputBlock from './modules/CountryInputBlock';

// eslint-disable-next-line import/prefer-default-export
export function CountryFilter() {
  return (
    <div>
      <CountryInputBlock />
      <CountryTable />
    </div>
  );
}
