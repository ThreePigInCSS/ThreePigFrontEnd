import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import './bellows.scss';
import b01 from '../static/bellows-01.jpg';
import b02 from '../static/bellows-02.jpg';
import b03 from '../static/bellows-03.jpg';
import b04 from '../static/bellows-04.jpg';
import b05 from '../static/bellows-05.jpg';

const { Content } = Layout;

const learnMore = '了解更多';

class Bellows extends Component {
  constructor(props) {
    super(props);

    this.menuList = [
      {
        name: '学术交流',
        enName: 'Academic communication',
        bgImg: b01,
        anchor: '#',
        text: '',
      },
      {
        name: '医学供需数据整合',
        enName: 'Medical supply and demand data integration',
        bgImg: b02,
        anchor: '#',
        text: '',
      },
      {
        name: '医学课题研究',
        enName: 'Medical research',
        bgImg: b03,
        anchor: '#',
        text: '',
      },
      {
        name: '医学医用管理',
        enName: 'Medical application management',
        bgImg: b04,
        anchor: '#',
        text: '',
      },
      {
        name: '医学技术产品化解决方案',
        enName: 'Medical tchnology productization solution',
        bgImg: b05,
        anchor: '#',
        text: '',
      },
    ];
  }

  createBellows() {
    return(
      <div className="bellows">  
        {
          this.menuList.map(menu => (
            <div className="piece" key={menu.enName}>
              <img className="piece-bg" src={menu.bgImg} />

              <div className="piece-top-layer">
                <p>{menu.name}</p>
                <p>{menu.enName}</p>
              </div>
            </div>
          ))
        }
      </div>
    );
  }

  render() {
    return (
      <Content>
        {this.createBellows()}

      </Content>
    );
  }
}

export default Bellows;
