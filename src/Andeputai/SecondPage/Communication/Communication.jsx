import React, { PureComponent } from 'react';
import './index.scss';

const infos = [
    {
        title: '中国医师协会皮肤科医师学术年会',
        year: '2018.',
        date: '11.9'
    },
    {
        title: '中国整形美容协会微创分会年会',
        year: '2018.',
        date: '10.30'
    },
    {
        title: '北京市大兴区科委成果转化展示会',
        year: '2018.',
        date: '9.19'
    },
    {
        title: '京津冀皮肤科年会',
        year: '2018.',
        date: '3.24'
    },
];
export default class CarouselIndex extends PureComponent{
    constructor() {
        super();
    }

    back = (slt) => {
        document.querySelector('.communication.second-page').style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    renderItem(item) {
        return (
            <div className="comm_item">
                <span className="news">News</span>
                <div className="info-detail">
                    <span>{item.title}</span>
                    <div className="year">{item.year}<span className="date">{item.date}</span></div>
                </div>
            </div>
        );
    }

    render() {
        return (
           <div className="communication second-page">
               <div className="content-box">
                   <div className="back" onClick={this.back} />
                   <div className="title">学术交流 Academic communication</div>
                   <div className="content">
                       {
                           infos.map(item => this.renderItem(item))
                       }
                   </div>
               </div>
           </div>
        );
    }
}