import { GraphFilter } from '../components/CountryFilter/interfaces';

const URL:string = process.env.REACT_APP_GRAPH_API!;

const makeGraphRest = (query: string, variables: GraphFilter) => fetch(URL, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify({ query, variables }),
}).then((res) => (res.json()));

export default makeGraphRest;
