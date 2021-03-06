import React, { Component } from 'react';
import { Layout, Button } from 'antd';
import './bellows.scss';
import { detectmob, transitionHeight } from '../../utils/utils.js'
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
import ff1 from '../static/ff1.jpg';
import ff2 from '../static/ff2.jpg';

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
        id: 'study',
        name: '学术交流',
        enName: 'Academic communication',
        bgImg: b01,
        anchor: '#',
        onClick: true,
        footer: true,
        hideMore: true,
        hasDetail: ".communication.second-page",    // 用于二级页面
        text: [
          '安德普泰医疗科技定期参加中国医学交流活动，与众多知名专家开展学术研究并发表专业论文。与国际医学机构保持常态化沟通。',
          'UnderProved medical technology regularly participates in Chinese medical exchange activities, conducts academic research with many well-known experts and publishes professional papers. Maintain regular communication with international medical institutions.'
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
          '多年医学领域经验使我们更熟悉临床数据与使用者数据，这些数据将引导我们的研究方向。',
          'Years of experience in the medical field has made us more familiar with clinical data and user data, which will guide our research direction. '
        ],
        bgImgBig: bb02,
        mobText: 'Established in 2011 by the co-founder team of medical professional background, Beijing UnderProved medical technology co., LTD focuses on the research and development, management and market transformation of medical technology. I have been focusing on skin health for 7 years, and working together with a professional consulting team composed of authoritative experts in pharmacy.',
      },
      {
        id: 'research',
        name: '医学课题研究',
        enName: 'Medical research',
        bgImg: b03,
        anchor: '#',
        onClick: true,
        hasDetail: ".research2.second-page",    // 用于二级页面
        footer: true,
        text: [
          '与合作机构建立联合研究机制，关注时下最新研究方向，持续更新肌肤领域创新理念，对未知医学领域进行探索研究。',
          'Establish joint research mechanism with cooperative institutions, pay attention to the latest research direction, continuously update innovative ideas in skin field, and explore and study unknown medical fields. ',
        ],
        bgImgBig: bb03,
        mobText: 'Established in 2011 by the co-founder team of medical professional background, Beijing UnderProved medical technology co., LTD focuses on the research and development, management and market transformation of medical technology. I have been focusing on skin health for 7 years, and working together with a professional consulting team composed of authoritative experts in pharmacy.',
      },
      {
        name: '医学应用管理',
        enName: 'Medical application management',
        bgImg: b04,
        anchor: '#',
        text: [
          '全球化发掘具备应用可能性的医学技术、设备、材料、原料，并对其知识产权进行归集，用于行业共享及二次研发。',
          'Globalization explores medical technologies, equipment, materials and raw materials with application possibilities, and collects their intellectual property rights for industry sharing and secondary research and development. '
        ],
        bgImgBig: bb04,
        mobText: 'Established in 2011 by the co-founder team of medical professional background, Beijing UnderProved medical technology co., LTD focuses on the research and development, management and market transformation of medical technology. I have been focusing on skin health for 7 years, and working together with a professional consulting team composed of authoritative experts in pharmacy.',
      },
      {
        name: '医学技术产品化解决方案',
        enName: 'Medical technology productization solution',
        bgImg: b05,
        anchor: '#',
        onClick: true,
        hasDetail: ".solutions.second-page",    // 用于二级页面
        footer: true,
        id: 'solution',
        text: [
          '整合基础医学资源进行多样优化组合，创造符合各方使用需求的医学产品。如何成功实现量产需要目标数据、专业技能以及实验室论证等必要执行经验。',
          'Integrate basic medical resources for diversified optimization and combination to create medical products that meet the needs of all parties. How to achieve mass production successfully requires target data, professional skills and necessary execution experience such as laboratory demonstration. '
        ],
        bgImgBig: bb05,
        mobText: 'Established in 2011 by the co-founder team of medical professional background, Beijing UnderProved medical technology co., LTD focuses on the research and development, management and market transformation of medical technology. I have been focusing on skin health for 7 years, and working together with a professional consulting team composed of authoritative experts in pharmacy.',
      },
    ];
    
    this.state = {
      limit: true,
    }
  }

    // 显示二级页面
    showDetail = (slt) => {
    document.querySelector(slt).style.display = 'block';
    document.body.style.overflow = 'hidden';
    };

  createStudyContent() {
    let content = [
      {
        tiltle: '中国医师协会皮肤科医师学术年会',
        type: 'News',
        year: '2018.',
        date: '11.9',
      },
      {
        tiltle: '中国整形美容协会微创分会年会',
        type: 'News',
        year: '2018.',
        date: '10.30',
      },
      {
        tiltle: '北京市大兴区科委成果转化展示会',
        type: 'News',
        year: '2018.',
        date: '9.19'
      },
      {
        tiltle: '京津冀皮肤科年会',
        type: 'News',
        year: '2018.',
        date: '3.24',
      },
    ];

    if(this.state.limit) {
      content = content.slice(0, 5);
    }

    return (
      <div className="study">
        {content.map((item) =>  {

          //  + (index % 2 == 0 ? 'study-border' : '')
          return (
            <div key={item.tiltle} className="study-news">
            <div className="tag" />
            <div className="title">
              <p className="title-name">
                <a>{item.tiltle}</a>
              </p>
              
              <p className="date">
                <span style={{color: '#0087C3'}}>{item.year}</span>
                <span style={{color: '#05256B'}}>{item.date}</span>
              </p>
            </div>
            
            
          </div>
          );
        })}
      </div>
    );
  }

  createResearchContent() {
    let content = [
      {
        tiltle: '新型抗自由基神经酰胺脂质复合物的构建及生物学评价',
      },
      {
        tiltle: '颠倒散的新型开发应用',
      },
      {
        tiltle: '白癜风的外用制剂研发',
      },
      {
        tiltle: '经典防晒剂中加入纳米化红景天在防晒产品的应用',
      },
      {
        tiltle: '植物提取物的透皮研究及应用',
      },
      {
        tiltle: '硫磺制剂工艺改进流程开发',
      },
      {
        tiltle: '纳米脂质体包裹技术的呈现及稳定性研究开发',
      },
      {
        tiltle: '抗衰元素在头面部细纹改善的制剂研究应用开发',
      },
      {
        tiltle: '高抗敏性防晒制剂的研究及应用开发',
      },
      {
        tiltle: '新型抗氧化植物元素的开发与应用',
      },
      {
        tiltle: '透皮吸收技术',
      },
    ]

    if(this.state.limit) {
      content = content.slice(0, 5);
    }

    return (
      <div className="research">
        {content.map((item) =>  {
          return (
            <div key={item.tiltle} className="research-news">
            
            <div className="title">
              <div className="icon"/>
              
              <p className="title-name">
                <a>{item.tiltle}</a>
              </p>
            </div>
          </div>
          );
        })}
      </div>
    );


  }

  createSolutionContent() {
    let content = [
      {
        img: ff1,
        name: '芙芙',
        title: '芙芙品牌诞生于安德普泰医疗科技实验室，最早是名为“FULFIL”的中国肌肤健康研究计划。该计划联合国内多家医院、研究所、专业机构于2016年启动至今，广泛收集肌肤健康数据用于成分研发与产品转化。',
        href: 'http://www.fulfil.com.cn'
      },
      {
        img: ff2,
        name: '芙清',
        title: '芙清是针对痤疮类症状而研制的专项产品，用于辅助痤疮治疗。',
        href: 'http://www.fulfil.com.cn'
      },
    ];

    if(this.state.limit) {
      content = content.slice(0, 1);
    }

    return (
      <div className="solution">
        {content.map((item) =>  {
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
                <a href={item.href}>前往官方网站</a>
              </p>
            </div>
          </div>
          );
        })}
      </div>
    );
    
  }

  switchContent (id) {
    switch (id) {
      case 'study':
        return this.createStudyContent();
      
      case 'research':
        return this.createResearchContent();
     
      case 'solution':
        return this.createSolutionContent();

      default:
        return null;
    }
  }
  

  createMobBellows(menu, index) {

    const disableLimit = (event) => {
      this.setState({
        limit: false,
      }, () => {
        transitionHeight(
          document.querySelector('.piece-active'),
          document.querySelector('.content-active'),
          400
        );
      });
      
      event.stopPropagation();
    }

    const clickPiece = function (index) {
      if(!this.menuList[index].onClick) {
        this.menuList.forEach(item => {item.active = false;});
        this.setState({
          limit: true,
        });
        return;
      }

      if(this.menuList[index].active) {
        contentBack(index);
      } else {
        this.menuList.forEach(item => {item.active = false;});
        this.menuList[index].active = true;
        this.setState({
          limit: true,
        }, () => {
          transitionHeight(
            document.querySelector('.piece-active'),
            document.querySelector('.content-active'),
            400
          );
        });
      }
    };

    window.clickPiece = clickPiece.bind(this);

    const contentBack = (index, ev) => {
      this.menuList[index].active = false;
      this.setState({
        limit: true,
      });
      
      ev && ev.stopPropagation();
    }

    const hex = index * 25 + index;
    return (
      <div onClick={clickPiece.bind(this, index)}
          className="piece"
          key={menu.enName}
          id={menu.id}
        >
          <div className="img-wrapper" style={{
              backgroundImage: `url(${menu.bgImgBig})`,
              paddingTop: '35.73%',
              height: 'auto',
              width: 'auto',
            }}
          >
            <div style={{backgroundColor: `rgba(${hex}, ${hex}, ${hex})`,}} 
              className={"piece-top-layer" + (menu.active ? ' layer-active' : '')}
            >
              <p>{menu.name}</p>
              <p>{menu.enName}</p>

            </div>
          </div>
          
          {
            <div  className={"content-container " + (menu.active ? 'content-active' : 'piece-static')}> 
                <div className={"piece-content " + (menu.active ? 'piece-active' : '')} 
                >
                  <div className="content-wrap">
                    <p className="title">{menu.name}</p>
                    <p className="title">{menu.enName}</p>
                    <hr/>


                    {this.switchContent(menu.id)}

                    {
                      menu.footer ?
                      <div className="buttons">
                        <div className={"btn-more " + (menu.hideMore ? 'hide-more' : '')} onClick={disableLimit}>
                          {watchMore + ' '}>>
                        </div>

                        <div onClick={contentBack.bind(this, index)} 
                          className="btn-content-back"
                          style={{backgroundImage: `url(${btnBack})`}}
                        />
                      </div> :
                    null
                    }

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

          <div className={"description " + (menu.active ? 'active-des' : '')}>
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
            <div className="img-wrapper"
              style={{
                paddingTop: '280%',
                backgroundImage: !menu.active ? `url(${menu.bgImg})` : null
              }}
            >
              <div style={{
                  backgroundColor: `rgba(${hex}, ${hex}, ${hex})`,
                }} 
                className={"piece-top-layer" + (menu.active ? ' layer-active' : '')}
              >
                 {menu.active && <div className="btn-back" onClick={back.bind(this, index)} />}
                <p>{menu.name}</p>
                <p style={
                    menu.name.length > 6 ?
                      {padding: `0 calc(50% - ${8 * 1.4 * 11}px)`} :
                      null
                  }>
                  {menu.enName}
                </p>
                {menu.active && menu.hasDetail && <div className="learn-more"><Button onClick={() => {this.showDetail(menu.hasDetail);}}>{learnMore}</Button></div>}
               
              
              </div>
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
