import React, {Component} from 'react';
import './App.scss';
import 'antd/dist/antd.css';
import {Header, Bellows, Footer, Footer2, Carousel, Connect, Communication,Research} from './Andeputai';

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
                <div data-alt="二级页面存放处">
                    <Communication/>
                    <Research/>
                </div>
            </div>
        );
    }
}

export default App;
