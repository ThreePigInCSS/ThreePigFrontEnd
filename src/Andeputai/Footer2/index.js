import React, {PureComponent} from 'react';
import './footer.scss';

/**
 * Created by qixiangyu on 2018/11/11.
 */

export default class Footer extends PureComponent {
    constructor(props) {
        super(props);

        this.businessInfo = [
            [
                {
                    title: '北京中医药大学皮肤性病学研究院',
                    href: '#'
                },
                {
                    title: '北京石油化工学院制药工程学院',
                    href: '#'
                },
                {
                    title: '南京中医药大学药学院',
                    href: '#'
                },
                {
                    title: '浙江大学化妆品创新研究中心',
                    href: '#'
                },
                {
                    title: '中国医学科学院药用植物研究所',
                    href: '#'
                },
                {
                    title: '北京大学第一医院',
                    href: '#'
                },

            ],
            [
                {
                    title: '北京大学人民医院',
                    href: '#'
                },
                {
                    title: '北京大学第三医院',
                    href: '#'
                },
                {
                    title: '中国医学科学院协和医院',
                    href: '#'
                },
                {
                    title: '中日友好医院',
                    href: '#'
                },

                {
                    title: '空军总医院',
                    href: '#'
                },
                {
                    title: '首都医科大学友谊医院',
                    href: '#'
                },
            ],
            [
                {
                    title: '首都医科大学宣武医院',
                    href: '#'
                },
                {
                    title: '首都医科大学同仁医院',
                    href: '#'
                },
                {
                    title: '首都医科大学安贞医院',
                    href: '#'
                },

                {
                    title: '北京中医药大学东直门医院',
                    href: '#'
                },
                {
                    title: '北京中医药大学东方医院',
                    href: '#'
                },
                {

                    title: '中国医学科学院整形外科医院',
                    href: '#'
                }
            ],
        ];

    }

    render() {
        let company = "北京安德普泰医疗科技有限公司";
        let companyEng = "Beijing UnderProved medical technology co. LTD ";
        let netInfo = "京ICP备 18032874 号";
        return (
            <div className="footer_container" id="cooperation">
                <div className="footer_title">合作伙伴</div>
                <div className="footer">
                    {
                        this.businessInfo.map((item, index) => (
                            <div className="footer_item" key={index}>
                                {
                                    item.map((link, linkIndex) => (
                                        <a key={linkIndex} href="javascript:void(0);" target="_blank">{link.title}</a>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
                <div className="footer_info_content">
                    <div className="footer_info">
                        <span>{company}&nbsp;&copy;</span>
                        <span>{companyEng} <span className="net_info">{netInfo}</span></span>

                    </div>
                </div>
            </div>
        )
    }
}
