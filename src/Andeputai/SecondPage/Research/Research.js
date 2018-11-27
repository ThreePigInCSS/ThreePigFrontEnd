import React, { Component } from 'react';
import './research.scss';



class Research extends Component {
  constructor(props) {
      super(props);

      this.researchList = [
          {
            title:"新型抗自由基神经酰胺脂质复合物的构建及生物学评价"
          },
          {
            title:"颠倒散的新型开发应用"
          },
          {
              title:"白癜风的外用制剂研发"
          },
          {
              title:"经典防晒剂中加入纳米化红景天在防晒产品的应用"
          },
          {
              title:"植物提取物的透皮研究及应用"
          },
          {
              title:"硫磺制剂工艺改进流程开发"
          },
          {
              title:"纳米脂质体包裹技术的呈现及稳定性研究开发"
          },
          {
              title:"抗衰元素在头面部细纹改善的制剂研究应用开发"
          },
          {
              title:"高抗敏性防晒制剂的研究及应用开发"
          },
          {
              title:"新型抗氧化植物元素的开发与应用"
          },
          {
              title:"透皮吸收技术"
          },

      ]

  }

    back = (slt) => {
        document.querySelector('.research2.second-page').style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    renderItem(item) {
        return (
            <div className="comm_item">
                <div className="icon"/>
                <div className="info-detail">
                    <span>{item.title}</span>
                </div>
            </div>
        );
    }


  render() {
    return (
        <div className="research2 second-page">
            <div className="content-box">
                <div className="back" onClick={this.back} />
                <div className="title">医学课题研究 Medical research</div>
                <div className="content">
                    {
                        this.researchList.map(item => this.renderItem(item))
                    }
                </div>

            </div>
        </div>
    );
  }
}

export default Research;
