import React, { Component } from 'react';
import { Row, Col} from 'antd';
import './footer.scss';

/**
 * Created by qixiangyu on 2018/11/11.
 */

class Footer extends Component{
    constructor(props) {
        super(props);

        this.businessInfo = [
            {
                title: '北京中医药大学皮肤性病学研究院',
                href: '#'
            },
            {
                title: '北京大学人民医院',
                href: '#'
            },
            {
                title: '首都医科大学宣武医院',
                href: '#'
            },
            {
                title: '北京石油化工学院制药工程学院',
                href: '#'
            },
            {
                title: '北京大学第三医院',
                href: '#'
            },
            {
                title: '首都医科大学同仁医院',
                href: '#'
            },
            {
                title: '南京中医药大学药学院',
                href: '#'
            },
            {
                title: '中国医学科学院协和医院',
                href: '#'
            },
            {
                title: '首都医科大学安贞医院',
                href: '#'
            },
            {
                title: '浙江大学化妆品创新研究中心 ',
                href: '#'
            },
            {
                title: '中日友好医院',
                href: '#'
            },
            {
                title: '北京中医药大学东直门医院',
                href: '#'
            },
            {
                title: '中国医学科学院药用植物研究所',
                href: '#'
            },
            {
                title: '空军总医院',
                href: '#'
            },
            {
                title: '北京中医药大学东方医院',
                href: '#'
            },
            {
                title: '北京大学第一医院',
                href: '#'
            },
            {
                title: '首都医科大学友谊医院',
                href: '#'
            },{

                title: '中国医学科学院整形外科医院',
                href: '#'
            }
        ];

    }


    createBusinessInfo() {
        return(
            <div id="footerList">
                <h1 id="businessTitle">合作伙伴</h1>
                <Row id = "aList"  >
                    {
                        this.businessInfo.map(item => (
                            <Col className="listCol"
                                 xs={{ span:24 }} md={{ span:12  }} lg = {{ span:8 }}
                            >
                                <a href={item.href}>{item.title}</a>
                            </Col>
                        ))
                    }

                </Row>


            </div>
        );
    }



    render(){
        let company = "北京安德普泰医疗科技有限公司©";
        let companyEng = "Beijing UnderProved medical technology co. LTD ";
        let netInfo = "京网备";
        return(
            <div id="footer">
                {this.createBusinessInfo()}
                <div className="footerDiv">
                    <Row className="footerInfo" >
                        <Col sm={{span: 24}} lg={{span: 8}}>
                            <span >{company}</span>
                        </Col>
                        <Col sm={{span: 24}} lg={{span: 8}}>
                            <span >{companyEng}</span>
                        </Col>
                        <Col sm={{span: 24}} lg={{span: 8}}>
                            <span >{netInfo}</span>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}


export default Footer;
