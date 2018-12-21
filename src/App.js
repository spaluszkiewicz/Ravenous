import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header itemID="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="test">

            <p>Alles Klar</p><br />
            <span>Hello</span>

          </div>

        </header>
      </div>
    );
  }
}

export default App;
