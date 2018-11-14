import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { detectmob } from '../../utils/utils.js'
import './header.scss';
import logo from '../static/logo.png';


class Header extends Component {
  constructor(props) {
    super(props);


    this.state = {
      collapsed: true,
    }

    this.navList = [
      {
        name: 'Home',
        anchor: '#home',
        zName: '首页',
      },
      {
        name: 'About us',
        anchor: '#',
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
        anchor: '#',
        zName: '企业动态',
      },
    ];
  }

  createPCHeader() {
    return(
      <div id="home" className="pc-home">
        <div className="logo">
          <a href="#home">
            <img src={logo} alt="img"/>
          </a>
        </div>

        <Menu
          theme="dark"
          mode="horizontal"
          style={{ lineHeight: '50px', fontSize: '1rem' }}
        >
          {
            this.navList.map(nav => (
              <Menu.Item key={nav.name} className="involved-share">
                <div className="text-container">
                  <a className="hover" href={nav.anchor}>{nav.name}</a>
                  <a className="hover-other" href={nav.anchor}>{nav.zName}</a>
                </div>
              </Menu.Item>
            ))
          }
        </Menu>
      </div>
    );
  }

  createMobHeader() {
    const {collapsed} = this.state;

    const toggleCollapsed = () => {
      this.setState({
        collapsed: !collapsed
      });
    };

    return (
      <div className="menu" id="home">
        <div className="menu-title">
          <a href="#home">
            <img src={logo} alt="img" />
          </a>

          <div className="menu-btn" onClick={toggleCollapsed}>
            <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
          </div>
        </div>

        <div className={'menu-content ' + (collapsed ? 'content-hide' : 'content-show') }
          id="menu-selector"
        >
          <Menu
            theme="dark"
            mode="inline"
            style={{ lineHeight: '34px' }}
          >
            {
              this.navList.map(nav => (
                <Menu.Item key={nav.name}>
                  <a href={nav.anchor}>
                    {nav.name}
                  </a>
                </Menu.Item>
              ))
            }
          </Menu>
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
