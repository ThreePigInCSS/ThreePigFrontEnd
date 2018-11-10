import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import 'antd/dist/antd.css';
import { Button } from 'antd';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Three Pig 
            三只小猪工作室
          </a>
          <Button>了解更多</Button>
        </header>
      </div>
    );
  }
}

export default App;
