import React, {Component} from 'react';
import './App.scss';
import 'antd/dist/antd.css';
import {Header, Bellows, Footer, Footer2, Carousel, Connect} from './Andeputai';

document.title = '安德普泰医疗科技';
class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Carousel/>
                 <Connect/>
                <Bellows />
                <Footer2/>
            </div>
        );
    }
}

export default App;
