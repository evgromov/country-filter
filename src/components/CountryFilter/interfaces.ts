export interface CountryItem {
  name: string;
  code: string;
}

export interface CountriesArray {
  countries: CountryItem[]
}
export interface CountriesResponse {
  data: CountriesArray
}

export interface CodeItem {
  eq: string
}
export interface CodeObj {
  code: CodeItem
}
export interface GraphFilter {
  filter: CodeObj
}
