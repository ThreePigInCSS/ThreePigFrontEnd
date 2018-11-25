import React, { PureComponent } from 'react';
import { Carousel } from 'antd';
import './index.scss';

const imgs = [
    {
        info: "全球化探索医学创新理念及应用技术",
        infoEN: "Globalization explores innovative ideas and applied technologies in medicine",
        url: require('../static/carousel-01.jpg'),
    }
];
export default class CarouselIndex extends PureComponent{
    render() {
        return (
            <div id="home">
                <Carousel autoplay autoplaySpeed={3000}>
                    {
                        imgs.map(item => (
                            <div key={item.info}>
                                <div className="wrapper" style={{backgroundImage: `url(${item.url})`, color: '#fff'}}>
                                    <div className="info-box">
                                        <div className="info">{item.info}</div>
                                        <div className="infoEN">{item.infoEN}</div>
                                        <div className="info info-mobile">
                                            <div>全球化探索</div>
                                            <div>医学创新理念</div>
                                            <div>及应用技术</div>
                                        </div>
                                        <div className="infoEN infoEN-mobile">
                                            <div>Globalization explores</div>
                                            <div>innovative ideas</div>
                                            <div>and applied technologies</div>
                                            <div>in medicine</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        );
    }
}