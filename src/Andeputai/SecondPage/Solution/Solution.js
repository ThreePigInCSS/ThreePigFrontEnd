import React, { Component } from 'react';
import ff1 from '../../static/ff1.jpg';
import ff2 from '../../static/ff2.jpg';
import './Solution.scss';


let content = [
    {
        img: ff1,
        name: '芙芙',
        title: '芙芙品牌诞生于安德普泰医疗科技实验室，最早是名为 "FULFIL" 的中国肌肤健康研究计划。该计划联合国内多家医院、研究所、专业机构于2016年启动至今，广泛收集肌肤健康数据用于成分研发与产品转化。',
        href: 'http://www.fulfil.com.cn/'
    },
    {
        img: ff2,
        name: '芙清',
        title: '芙清是针对痤疮类症状而研制的专项产品，用于辅助痤疮治疗。',
        href: 'http://www.fulfil.com.cn/'
    },
];

class Solution extends Component {
  constructor(props) {
      super(props);

  }

    back = (slt) => {
        document.querySelector('.solutions.second-page').style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    renderItem(item) {
        return (
            <div key={item.title} className="solution-news">
                <div className="img" style={{backgroundImage: `url(${item.img})`}} />
                <div className="title">
                    <p className="title-name">
                        {item.name}
                    </p>
                    <p className="title-des">
                        {item.title}
                    </p>
                    <p className="title-web">
                        <a target="_blank" href={item.href}>前往官方网站</a>
                    </p>
                </div>
            </div>
        );
    }


  render() {
    return (
        <div className="solutions second-page">
            <div className="content-box">
                <div className="back" onClick={this.back} />
                <div className="title">医学技术产品化解决方案 Medical technology productization solution</div>
                <div className="content">
                    {
                        content.map(item => this.renderItem(item))
                    }
                </div>

            </div>
        </div>
    );
  }
}

export default Solution;
