import { GraphFilter } from './interfaces';

const createFilterSettings = (code:string):GraphFilter => {
  const filterSettings:GraphFilter = {
    filter: { code: { eq: code.toUpperCase() } },
  };
  return filterSettings;
};

const createFilterQuery = `query GetCountry($filter: CountryFilterInput) {
                   countries(filter:$filter) {
                     name
                     code
                   }
              }`;

export { createFilterSettings, createFilterQuery };
