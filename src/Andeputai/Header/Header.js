import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { detectmob } from '../../utils/utils.js'
import './header.scss';


class Header extends Component {
  constructor(props) {
    super(props);


    this.state = {
      collapsed: true,
    }

    this.navList = [
      {
        name: 'Home',
        anchor: '#',
      },
      {
        name: 'About us',
        anchor: '#',
      },
      {
        name: 'Business',
        anchor: '#',
      },
      {
        name: 'Cooperation',
        anchor: '#',
      },
      {
        name: 'Dynamic',
        anchor: '#',
      },
    ];
  }

  createPCHeader() {
    return(
      <div>
        <div className="logo" />

        <Menu
          theme="dark"
          mode="horizontal"
          style={{ lineHeight: '64px' }}
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
      <div className="menu">
        <div className="menu-title">
          <div className="logo" />

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
            style={{ lineHeight: '64px' }}
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
