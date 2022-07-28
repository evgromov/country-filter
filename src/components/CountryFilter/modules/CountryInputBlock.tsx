import React, { useEffect, useMemo, useRef } from 'react';
import makeGraphRest from '../../../app/helper';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectCountryCode, addCountryCode, addCountry } from '../reducer/countrySlice';
import styles from '../Country.module.css';
import { CountriesResponse } from '../interfaces';
import { createFilterSettings, createFilterQuery } from '../countryFilterOptions';

// eslint-disable-next-line import/prefer-default-export
function CountryInputBlock() {
  const renderCountRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const countryValue = useAppSelector(selectCountryCode);

  const storeCountryCode = ():void => {
    if (renderCountRef?.current) {
      const codeString:string = renderCountRef.current?.value;
      dispatch(addCountryCode(codeString));
    }
  };

  const startInputValue = (value:string):void => {
    if (renderCountRef.current) {
      renderCountRef.current.value = value;
    }
  };

  useEffect(() => {
    startInputValue(countryValue);
  }, []);

  useMemo(():void => {
    makeGraphRest(
      createFilterQuery,
      createFilterSettings(countryValue),
    ).then((res: CountriesResponse) => {
      dispatch(addCountry(res.data?.countries));
    });
  }, [countryValue]);

  return (
    <div className={styles.row}>
      <input ref={renderCountRef} placeholder="i.e. EE for search Estonia" />
      <button
        type="button"
        className={styles.button}
        aria-label="search country"
        onClick={storeCountryCode}
      >
        Search
      </button>
    </div>
  );
}

export default CountryInputBlock;
