import React, { Component } from 'react';
import './App.scss';
import 'antd/dist/antd.css';
import {Header, Bellows} from './Andeputai';
    
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Bellows />
      </div>
    );
  }
}

export default App;
