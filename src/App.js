import React, { Component } from 'react';
import './App.scss';
import 'antd/dist/antd.css';
import { Header, Bellows, Footer, Footer2, Carousel, Connect, Communication, Research, Solution } from './Andeputai';

document.title = '安德普泰医疗科技';
class App extends Component {

    componentDidMount() {
        var overscroll = function (el) {
            el.addEventListener('touchstart', function () {
                var top = el.scrollTop
                    , totalScroll = el.scrollHeight
                    , currentScroll = top + el.offsetHeight;
                if (top === 0) {
                    el.scrollTop = 1;
                } else if (currentScroll === totalScroll) {
                    el.scrollTop = top - 1;
                }
            });

            el.addEventListener('touchmove', function (evt) {
                if (el.offsetHeight < el.scrollHeight)
                    evt._isScroller = true;
            });
        }

        overscroll(document.querySelector('.App'));
        document.body.addEventListener('touchmove', function (evt) {
            if (!evt._isScroller) {
                evt.preventDefault();
                console.log(111);
            }
        });
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Carousel />
                <Connect />
                <Bellows />
                <Footer2 />
                <div data-alt="二级页面存放处">
                    <Communication />
                    <Research />
                    <Solution />
                </div>
            </div>
        );
    }
}
export default App;
