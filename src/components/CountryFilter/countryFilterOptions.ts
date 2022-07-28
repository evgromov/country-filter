import { GraphFilter } from './interfaces';

const createFilterSettings = (code:string):GraphFilter => {
  const codeString = code.toUpperCase();
  const filterSettings:GraphFilter = {
    filter: { code: { eq: codeString } },
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
