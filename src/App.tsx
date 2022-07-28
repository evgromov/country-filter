import React from 'react';
import { CountryFilter } from './components/CountryFilter/CountryFilter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Find your country!</p>
      </header>
      <main className="App-main">
        <div className="App-main_block">
          <h1>Type the country code</h1>
          <CountryFilter />
        </div>
      </main>
    </div>
  );
}

export default App;
