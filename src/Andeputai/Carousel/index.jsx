import React, { PureComponent } from 'react';
import { Carousel } from 'antd';
import './index.scss';

const imgs = [
    {
        info: "全球化探索医学创新理念及应用技术",
        infoEN: "Globalization explores innovative ideas and applied technologies in medicine",
        url: require('../static/bellows-01-big.jpg'),
    },
    {
        info: "全球化探索医学创新理念及应用技术222222222222",
        infoEN: "Globalization explores innovative ideas and applied technologies in medicine",
        url: require('../static/bellows-03-big.jpg'),
    },
    {
        info: "全球化探索医学创新理念及应用技术333333333333333333",
        infoEN: "Globalization explores innovative ideas and applied technologies in medicine",
        url: require('../static/bellows-05-big.jpg'),
    }
];
export default class CarouselIndex extends PureComponent{
    render() {
        return (
            <Carousel autoplay autoplaySpeed={3000}>
                {
                    imgs.map(item => (
                        <div key={item.info}>
                            <div className="wrapper" style={{backgroundImage: `url(${item.url})`, color: '#fff'}}>
                                <div className="info-box">
                                    <span className="info">{item.info}</span>
                                    <span className="infoEN">{item.infoEN}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Carousel>
        );
    }
}