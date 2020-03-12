import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Pokedex from "./components/pokedex/pokedex";

function App() {
  return (
    <div className="App">
        {/*<header className="App-header">*/}
        {/*    /!*<img src={logo} className="App-logo" alt="logo" />*!/*/}

        {/*</header>*/}
        <Pokedex />
    </div>
  );
}

export default App;
