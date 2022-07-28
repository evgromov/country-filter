# Country-filter project

This project uses **Typescript**, **React** ^18.2.0, **React-redux** ^8.0.2, **Ant Design** as a css-framework, 
GraphQL for work with data.\
The project allows you to display data by country by entering the country code. Now the project displays only the code
and the name in the table, but you can expand it by adding the necessary lines for GraphQL to
_**src/components/CountryFilter/countryFilterOptions.ts.**_\
Text elements are not separated into separate components, because they are not mutable 
and are used for decorative purposes.\
The project uses an open API: https://countries.trevorblades.com/ \
_**Airbnb**_ package is also used as a Lint tests. 
As default country fetched Estonia.



### RUN PROJECT:
###     1. `rename .env.template to .env`
###     2. `npm install`
###     3. `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Also available Scripts:

In the project directory, you can run:
### `npm test`

Launches the jest-tests from App.test.tsx file.

### `npm run lint`

Check eslint issues in project's code and npm run lint-fix if need to fix.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
