import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { detectmob } from '../../utils/utils.js'
import './header.scss';
import logo from '../static/logo.png';
import logoS from '../static/logoS.png';
import btnO from '../static/open.png';
import btnS from '../static/static.png';


class Header extends Component {
  constructor(props) {
    super(props);


    this.state = {
      collapsed: true,
      dir: 'static',
    }

    this.navList = [
      {
        name: 'Home',
        anchor: '#home',
        zName: '首页',
      },
      {
        name: 'About us',
        anchor: '#about-us',
        zName: '了解我们',
      },
      {
        name: 'Business',
        anchor: '#business',
        zName: '业务',
      },
      {
        name: 'Cooperation',
        anchor: '#cooperation',
        zName: '合作',
      },
      {
        name: 'Dynamic',
        anchor: '#cooperation',
        zName: '企业动态',
      },
    ];
  }

  componentDidMount() {
    document.addEventListener('scroll', this.onMouseWheel.bind(this));
    this.findVisibleContent();
  }

  findVisibleContent = () => {
    this.navList.forEach(nav => {
      const rect = document.querySelector(nav.anchor).getBoundingClientRect(),
        {top} =  rect;
      if(Math.abs(top) < 150) {
        this.setState({
          current: nav.name,
        });
      }
    });
  }

  // > 0 up 
  // < 0 down
  acc(event) {
    if(!this.state.collapsed) {
      event.preventDefault();
    }
    const dir = window.pageYOffset - this.state.lastY > 0;
    this.state.lastY =window.pageYOffset;
    this.setState({
      dir,
    });
  }

  onMouseWheel(event) {
    this.findVisibleContent();
    if(detectmob()) {
      this.acc(event);
    }
  }

  

  createPCHeader() {
    const {current} = this.state;

    const handleClick = (e) => {
      this.setState({
        current: e.key,
      });
    }
    return(
      <div className="pc-home">
          <div className="header_container">
              <div className="logo">
                  <a href=".ant-carousel">
                      <img src={logo} alt="img"/>
                  </a>
              </div>

              <Menu
                  theme="dark"
                  mode="horizontal"
                  style={{lineHeight: '50px', fontSize: '1rem'}}
                  selectedKeys={[current]}
                  onClick={handleClick}
              >
                  {
                      this.navList.map(nav => (
                          <Menu.Item key={nav.name}
                                     className={"involved-share " + (nav.active ? 'ant-menu-item-selected' : '')}
                          >
                              <div className="text-container">
                                  <a className="hover" href={nav.anchor}>{nav.name}</a>
                                  <a className="hover-other" href={nav.anchor}>{nav.zName}</a>
                              </div>
                          </Menu.Item>
                      ))
                  }
              </Menu>
          </div>
      </div>
    );
  }

  createMobHeader() {
    let {collapsed, dir} = this.state,
      id = 'static-animation';

    if(dir !== 'static' ) {
      id = dir ? 'up-animation' : 'down-animation';
    }
    const toggleCollapsed = () => {
      this.setState({
        collapsed: !collapsed
      });
    };

    return (
      <div className="menu" >
        <div id={id} className={"menu-title " + (collapsed ? '' :  'menu-open')}>
          <a href=".ant-carousel">
            <img src={logoS} alt="img" />
          </a>

          <div className="menu-btn" onClick={toggleCollapsed}>
            <img src={collapsed ? btnS : btnO} alt="img" />
          </div>
        </div>

        <div className={'menu-content ' + (collapsed ? 'content-hide' : 'content-show') }
        >
          <Menu
            theme="dark"
            mode="inline"
            style={{ backgroundColor: '#05256B' }}
          >
            {
              this.navList.map(nav => (
                <Menu.Item className="menu-item" key={nav.name}>
                  <a href={nav.anchor}>
                    {nav.name + ' '} / {' '+nav.zName}
                  </a>
                </Menu.Item>
              ))
            }
          </Menu>

          <div className="menu-footer">    
            <p>
              Beijing UnderProved medical technology co. LTD
            </p>
          </div>
        </div>

      </div>
    );
  }

  render() {
    return (
      detectmob() ? this.createMobHeader() : this.createPCHeader()
    );
  }
}

export default Header;
