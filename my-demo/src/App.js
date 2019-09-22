import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import NavTop from './components/NavTop/NavTop'
import Home from './containers/Home/Home';
import UserCenter from './containers/UserCenter/UserCenter';
import ProductCenter from './containers/ProductCenter/ProductCenter';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;


class App extends React.Component {
  render() {
    return (
      <Layout>
        <Router>
          <Header>
            <NavTop />
          </Header>
          <Content>
            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/usercenter" component={UserCenter} />
              <Route path="/productcenter" component={ProductCenter} />
            </Switch>
          </Content>
        </Router>
      </Layout>
    );
  }
}
export default App;
