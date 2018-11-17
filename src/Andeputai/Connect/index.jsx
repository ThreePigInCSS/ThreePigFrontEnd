import React, { PureComponent } from 'react';
import './index.scss';

export default class CarouselIndex extends PureComponent{
    constructor() {
        super();
        this.state = {
            beLeft: false
        };
    }

    connect = () => {
        this.setState({
            beLeft: true
        });
    };

    back = () => {
        this.setState({
            beLeft: false
        });
    };

    render() {
        const { beLeft } = this.state;
        return (
           <div className="connect_wrap" id="about-us">
               <div className="connect_box">
                   <div className="connect_info" style={{ width: beLeft ? '80%' : '100%' }}>
                       <div>
                           <div className="be_flex"><div className="connect_title" style={{ flex: beLeft ? '' : 'auto', marginLeft: beLeft ? '10%' : 0 }}>安德普泰医疗科技</div></div>
                       </div>
                       <div>
                           <div className="be_flex"><div className="connect_content" style={{ flex: beLeft ? '' : 'auto', marginLeft: beLeft ? '10%' : 0 }}>北京安德普泰医疗科技有限公司由医学专业背景联合创始人团队建立于2011年，注重医学科技研发、管理及市场转化。</div></div>
                           <div className="be_flex"><div className="connect_content" style={{ flex: beLeft ? '' : 'auto', marginLeft: beLeft ? '10%' : 0 }}>7年间专注于皮肤健康领域，联合包括药剂学，药理学，生物工程学，临床医学，中医学，植物学等多学科权威专家组成专业顾问团队，</div></div>
                           <div className="be_flex"><div className="connect_content" style={{ flex: beLeft ? '' : 'auto', marginLeft: beLeft ? '10%' : 0 }}>共同致力于创造、改良适合广泛人群使用的医学技术。</div></div>
                       </div>
                       <div>
                           <div className="be_flex"><div className="connect_content" style={{ flex: beLeft ? '' : 'auto', marginLeft: beLeft ? '10%' : 0 }}>出于临床信息的收集与分析，结合消费者对医学护肤品的客观需求，安德普泰医疗科技持续引导技术研发方向，</div></div>
                           <div className="be_flex"><div className="connect_content" style={{ flex: beLeft ? '' : 'auto', marginLeft: beLeft ? '10%' : 0 }}>与国内外科研机构、企业一并努力制定跨界医学解决方案，为优质有效的医学技术进行产品化。为造福人类文明社会尽献全力。</div></div>
                       </div>
                       <div>
                           <div className="be_flex"><div className="connect_content" style={{ flex: beLeft ? '' : 'auto', marginLeft: beLeft ? '10%' : 0 }}>中国装备协会皮肤病与皮肤美容专业委员会常务委员单位</div></div>
                           <div className="be_flex"><div className="connect_content" style={{ flex: beLeft ? '' : 'auto', marginLeft: beLeft ? '10%' : 0 }}>北京中西医结合学会医学美容专业委员会企业委员单位</div></div>
                       </div>
                       <div>
                           <div className="be_flex"><div className="connect_btn" style={{ flex: beLeft ? '' : 'auto', marginLeft: beLeft ? '10%' : 0 }}><a onClick={this.connect}>联系我们了解更多信息</a></div></div>
                       </div>
                   </div>
                   <div className="connect_address" style={{ right: beLeft ? 0 : '-20%' }}>
                       <div className="cover" />
                       <div className="detail">
                           <span className="back" onClick={this.back} />
                           <div className="info">
                               北京市大兴区中关村科技园区 <br/>
                               大兴生物医药产业基地 <br/>
                               天华大街5号院13号楼1104-1105 <br/>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        );
    }
}