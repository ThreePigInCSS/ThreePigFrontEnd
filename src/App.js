import React, { Component } from 'react';
import './App.scss';
import 'antd/dist/antd.css';
import {Header, Bellows} from './Andeputai';
import Footer from "./Andeputai/Footer/Footer";
    
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Bellows />
        <Footer/>
      </div>
    );
  }
}

export default App;
