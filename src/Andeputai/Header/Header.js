import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import './header.scss';

const {Header: AHeader} = Layout;

class Header extends Component {
  constructor(props) {
    super(props);

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

  createHeader() {
    return(
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
    );
  }

  render() {
    return (
      <div>
        <div className="logo" />

        {this.createHeader()}

      </div>
      
    );
  }
}

export default Header;
