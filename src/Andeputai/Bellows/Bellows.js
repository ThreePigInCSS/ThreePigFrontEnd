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
import btnBack from '../static/m-pull.png';

const { Content } = Layout;

let learnMore = '了解更多',
  watchMore = '查看更多',
  isMob = false;

class Bellows extends Component {
  constructor(props) {
    super(props);
   
    this.layerList = [];
    this.menuList = [
      {
        name: '学术交流',
        enName: 'Academic communication',
        bgImg: b01,
        anchor: '#',
        text: [
          '每年参加各级专业学术会议<big>30余场</big> 与中华医学会皮肤与性病学专业委员会、中国中西医结合学会皮肤病与性病学专业委员会、中国医师协会皮肤科医师委员会、中国整形美容协会等国家级及省级皮肤科专业学会保持着常态化沟通。与众多知名专家开展学术研究并发表专业论文。',
          'Attend more than 30 professional academic conferences every year. Carry out academic research with many well-known experts and publish professional papers.'
        ],
        bgImgBig: bb01,
        mobText: 'Established in 2011 by the co-founder team of medical professional background, Beijing UnderProved medical technology co., LTD focuses on the research and development, management and market transformation of medical technology. I have been focusing on skin health for 7 years, and working together with a professional consulting team composed of authoritative experts in pharmacy.',
      },
      {
        name: '医学供需数据整合',
        enName: 'Medical supply and demand data integration',
        bgImg: b02,
        anchor: '#',
        text: [
          '每年参加各级专业学术会议<big>30余场</big> 与中华医学会皮肤与性病学专业委员会、中国中西医结合学会皮肤病与性病学专业委员会、中国医师协会皮肤科医师委员会、中国整形美容协会等国家级及省级皮肤科专业学会保持着常态化沟通。与众多知名专家开展学术研究并发表专业论文。',
          'Attend more than 30 professional academic conferences every year. Carry out academic research with many well-known experts and publish professional papers.'
        ],
        bgImgBig: bb02,
        mobText: 'Established in 2011 by the co-founder team of medical professional background, Beijing UnderProved medical technology co., LTD focuses on the research and development, management and market transformation of medical technology. I have been focusing on skin health for 7 years, and working together with a professional consulting team composed of authoritative experts in pharmacy.',
      },
      {
        name: '医学课题研究',
        enName: 'Medical research',
        bgImg: b03,
        anchor: '#',
        text: [
          '根据临床治疗需求，结合科研院所新技术成果，与多所大学及研究机构联合研发合作',
          'According to clinical treatment needs, in combination with the new technological achievements of the research institutes, we cooperate with a number of universities and research institutes for joint research and development',
        ],
        bgImgBig: bb03,
        mobText: 'Established in 2011 by the co-founder team of medical professional background, Beijing UnderProved medical technology co., LTD focuses on the research and development, management and market transformation of medical technology. I have been focusing on skin health for 7 years, and working together with a professional consulting team composed of authoritative experts in pharmacy.',
      },
      {
        name: '医学医用管理',
        enName: 'Medical application management',
        bgImg: b04,
        anchor: '#',
        text: [
          '每年参加各级专业学术会议<big>30余场</big> 与中华医学会皮肤与性病学专业委员会、中国中西医结合学会皮肤病与性病学专业委员会、中国医师协会皮肤科医师委员会、中国整形美容协会等国家级及省级皮肤科专业学会保持着常态化沟通。与众多知名专家开展学术研究并发表专业论文。',
          'Attend more than 30 professional academic conferences every year. Carry out academic research with many well-known experts and publish professional papers.'
        ],
        bgImgBig: bb04,
        mobText: 'Established in 2011 by the co-founder team of medical professional background, Beijing UnderProved medical technology co., LTD focuses on the research and development, management and market transformation of medical technology. I have been focusing on skin health for 7 years, and working together with a professional consulting team composed of authoritative experts in pharmacy.',
      },
      {
        name: '医学技术产品化解决方案',
        enName: 'Medical tchnology productization solution',
        bgImg: b05,
        anchor: '#',
        text: [
          '每年参加各级专业学术会议<big>30余场</big> 与中华医学会皮肤与性病学专业委员会、中国中西医结合学会皮肤病与性病学专业委员会、中国医师协会皮肤科医师委员会、中国整形美容协会等国家级及省级皮肤科专业学会保持着常态化沟通。与众多知名专家开展学术研究并发表专业论文。',
          'Attend more than 30 professional academic conferences every year. Carry out academic research with many well-known experts and publish professional papers.'
        ],
        bgImgBig: bb05,
        mobText: 'Established in 2011 by the co-founder team of medical professional background, Beijing UnderProved medical technology co., LTD focuses on the research and development, management and market transformation of medical technology. I have been focusing on skin health for 7 years, and working together with a professional consulting team composed of authoritative experts in pharmacy.',
      },
    ];
  }

  createMobBellows(menu, index) {
    const clickPiece = function (index) {
      if(this.menuList[index].active) {
        contentBack(index);
      } else {
        this.menuList.forEach(item => {item.active = false;});
        this.menuList[index].active = true;
  
        this.forceUpdate();
      }
    };

    const contentBack = (index, ev) => {
      this.menuList[index].active = false;
      this.forceUpdate();
      
      ev && ev.stopPropagation();
    }

    const hex = index * 25 + index;
    return (
      <div onClick={clickPiece.bind(this, index)}
          className="piece"
          key={menu.enName}
        >
          <img className="piece-bg" style={{height: 134 / 16 + 'rem'}} src={menu.bgImgBig} alt={index} />

          <div style={{height: 134 / 16 + 'rem', backgroundColor: `rgba(${hex}, ${hex}, ${hex})`,}} 
            className={"piece-top-layer" + (menu.active ? ' layer-active' : '')}
          >
            <p>{menu.name}</p>
            <p>{menu.enName}</p>

          </div>
          
          {
            <div className={"piece-content " + (menu.active ? 'piece-active' : 'piece-static')} 
              id="piece-transition"
            >
              <div className="content-wrap">
                <p className="title">{menu.name}</p>
                <p className="title">{menu.enName}</p>
                <hr/>
                <p className="content">
                  {menu.mobText}
                </p>

                <div className="buttons">
                  <div className="btn-more">
                    {watchMore + ' '}>>
                  </div>

                  <div onClick={contentBack.bind(this, index)} className="btn-content-back"><img src={btnBack} alt='img' /></div>
                </div>

              </div>

            </div>
          }
        </div>
    );
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
      if(!menu) {
        return null;
      }
      function setHtml(ref, text) {
        if(ref) {
          ref.innerHTML = text;
        }
      }

      return (
        <div  key={menu.enName} className={"piece-bg " + (menu.active ? 'active-bg' : 'static-bg')}>
          <img  src={menu.bgImgBig} alt="pic" />

          <div className="description">
            <p ref={(ref) => setHtml(ref, menu.text[0])} />
            <p ref={(ref) => setHtml(ref, menu.text[1])} />
          </div>
        </div>
      );
    }

    const createPCBellows = (menu, index) => {
      const hex = index * 25 + index;
      return (
        <div onClick={clickPiece.bind(this, index)}
            className={"piece " + (hasActive ? (menu.active ? 'pc-piece-active' : 'pc-piece-hide') : '')}
            key={menu.enName}
          >
              {
                menu.active ?
                null :
                <img className="piece-bg" src={menu.bgImg} alt={index} />
              }
            

            <div style={{
              backgroundColor: `rgba(${hex}, ${hex}, ${hex})`,
            }} 
              className={"piece-top-layer" + (menu.active ? ' layer-active' : '')}
            >
              <p>{menu.name}</p>
              <p>{menu.enName}</p>
              {menu.active && <div className="learn-more"><Button>{learnMore}</Button></div>}
              {menu.active && <div className="btn-back" onClick={back.bind(this, index)} />}
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
            return isMob ? this.createMobBellows(menu, index) : createPCBellows(menu, index)
          })
        }

        {
        
          !isMob && 
          this.menuList.map((menu) => {
            return showBigImg(menu)
          })
        }
      </div>
    );
  }

  render() {
    return (
      <div id="business">
        {this.createBellows()}

      </div>
    );
  }
}

export default Bellows;
