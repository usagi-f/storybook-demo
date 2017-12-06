import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-buttonGroup">
          <CustomButton>Info Button</CustomButton>
          <CustomButton color="orange">Warning Button</CustomButton>
          <CustomButton color="red">Error Button</CustomButton>
        </div>
      </div>
    );
  }
}

export default App;
