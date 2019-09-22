import React from 'react';
import { Breadcrumb } from 'antd';
import {
    HashRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
  } from "react-router-dom";
import A1 from './A1';
import A2 from './A2';



class Option1 extends React.Component{
    render(){
        return (
        <div>
        <div className='contentHeader'>
        <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to='/home/option1/1'>Application Center</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to='/home/option1/2'>Application List</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
        </div>
        <div className="contentContainer">
          <Route path='/home/option1/1' component={A1} />
          <Route path='/home/option1/2' component={A2} />


        </div>
        </div>
        
        )
    }
}

export default Option1