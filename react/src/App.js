import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-buttonGroup">
          <Button>Info Button</Button>
          <Button color="orange">Warning Button</Button>
          <Button color="red">Error Button</Button>
        </div>
      </div>
    );
  }
}

export default App;
