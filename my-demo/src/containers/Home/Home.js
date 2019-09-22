import React from "react";
import NavAside from "../../components/NavAside/NavAside";
import "./Home.less";
import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import Option1 from "./option1/Option1";
import Option2 from "./Option2";
import Option3 from "./Option3";

class Home extends React.Component {
  render() {
    var ht =
      document.documentElement.clientHeight || document.body.clientHeight;
    return (
      <div style={{ height: ht - 64 }} className="home">
        <NavAside />
        <div className="homeContent">
          <Route path="/home" exact={true} component={Option1} />
          <Route path="/home/option1" component={Option1} />
          <Route path="/home/option2" component={Option2} />
          <Route path="/home/option3" component={Option3} />
        </div>
      </div>
    );
  }
}

export default Home;
