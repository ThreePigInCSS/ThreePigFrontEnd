import React, { Component } from 'react';
import { Layout, Button } from 'antd';
import './bellows.scss';
import { detectmob } from '../../utils/utils.js'
import b01 from '../static/bellows-01.jpg';
import b02 from '../static/bellows-02.jpg';
import b03 from '../static/bellows-03.jpg';
import b04 from '../static/bellows-04.jpg';
import b05 from '../static/bellows-05.jpg';
import bb01 from '../static/bellows-01-big.jpg';
import bb02 from '../static/bellows-02-big.jpg';
import bb03 from '../static/bellows-03-big.jpg';
import bb04 from '../static/bellows-04-big.jpg';
import bb05 from '../static/bellows-05-big.jpg';

const { Content } = Layout;

let learnMore = '了解更多',
  isMob = false;

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
        bgImgBig: bb01,
        mobText: '',
      },
      {
        name: '医学供需数据整合',
        enName: 'Medical supply and demand data integration',
        bgImg: b02,
        anchor: '#',
        text: '',
        bgImgBig: bb02,
        mobText: '',
      },
      {
        name: '医学课题研究',
        enName: 'Medical research',
        bgImg: b03,
        anchor: '#',
        text: '',
        bgImgBig: bb03,
        mobText: '',
      },
      {
        name: '医学医用管理',
        enName: 'Medical application management',
        bgImg: b04,
        anchor: '#',
        text: '',
        bgImgBig: bb04,
        mobText: '',
      },
      {
        name: '医学技术产品化解决方案',
        enName: 'Medical tchnology productization solution',
        bgImg: b05,
        anchor: '#',
        text: '',
        bgImgBig: bb05,
        mobText: '',
      },
    ];
  }

  createBellows() {
    const clickPiece = function (index) {
      this.menuList.forEach(item => {item.active = false;});
      this.menuList[index].active = true;
      this.forceUpdate();
    };

    const back = function (index, ev) {
      this.menuList[index].active = false;
      this.forceUpdate();
      ev.stopPropagation();
    }

    function showBigImg(menu) {
      return (
        <div className="active-piece-bg">
          <img src={menu.bgImgBig} alt="pic" />

          <p>{menu.text}</p>
        </div>
      );
    }

    const createMobBellows = (menu, index) => {
      return (
        <div onClick={clickPiece.bind(this, index)}
            className="piece"
            key={menu.enName}
          >
            <img className="piece-bg" style={{height: 150}} src={menu.bgImgBig} alt={index} />

            <div style={{height: 150}} className={"piece-top-layer" + (menu.active ? ' layer-active' : '')}>
              <p>{menu.name}</p>
              <p>{menu.enName}</p>

            </div>
            
            {
              menu.active ?
              <div className="piece-content">
                <p className="title">{menu.name}</p>
                <p className="title">{menu.enName}</p>
                <hr/>
                <p className="content">
                  {menu.mobText}
                </p>

                <div className="btn" />
              </div> :
              null
            }
          </div>
      );
    }
  
    const createPCBellows = (menu, index) => {
      return (
        <div onClick={clickPiece.bind(this, index)}
            className={"piece" + (hasActive ? (menu.active ? '' : ' piece-hide') : '')}
            key={menu.enName}
          >
            <img className="piece-bg" style={{height: 500}} src={menu.bgImg} alt={index} />

            <div style={{height: 500}}  className={"piece-top-layer" + (menu.active ? ' layer-active' : '')}>
              <p>{menu.name}</p>
              <p>{menu.enName}</p>

              {
                menu.active ?
                  <Button shape="circle" icon="left" onClick={back.bind(this, index)} /> :
                  null
              }
            </div>
          </div>
      );
    }

    let activeMenu = this.menuList.filter((menu => menu.active)),
      hasActive = Boolean(activeMenu.length);

    isMob = detectmob();
    return (
      <div className="bellows">
        {
          this.menuList.map((menu, index) => {
            return isMob ? createMobBellows(menu, index) : createPCBellows(menu, index)
          })
        }

        {
          hasActive && !isMob ?
            showBigImg(activeMenu[0]) :
            null
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
