import React, { Component } from 'react';
import './App.css';

import Infos from './components/Infos';
import List from './components/List';

const infoApiURL = 'http://www.mocky.io/v2/5c13ea463400007400b8e840';
const reposApiURL = 'http://www.mocky.io/v2/5c13f0943400005300b8e856';
const starredApiURL = 'http://www.mocky.io/v2/5c13f24a3400000f00b8e85d';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Infos apiURL={infoApiURL} />
        <List apiURL={reposApiURL} title='Minha lista de repos:' />
        <List apiURL={starredApiURL} title='Minha lista de favoritos:' />
      </div>
    );
  }
}

export default App;
