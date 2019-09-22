import React from 'react';
import {NavLink} from 'react-router-dom';
import { Menu, Icon } from 'antd';
import './NavTop.less'

class NavTop extends React.Component{
    state = {
        current: '1',
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };
    
      render() {
        return (
            <div className='navTop'>
                <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px'}}
            >
              <Menu.Item key="1"><NavLink to="/home">首页</NavLink></Menu.Item>
              <Menu.Item key="2"><NavLink to="/usercenter">用户中心</NavLink></Menu.Item>
              <Menu.Item key="3"><NavLink to="/productcenter">产品中心</NavLink></Menu.Item>
            </Menu>
            </div>
        );
      }
}
export default NavTop