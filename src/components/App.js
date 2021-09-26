import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";

import Home from "./Home";
import Posts from "./Posts";
import Pages from "./Pages";
import "../styles/App.css";

const App = () => {
  return (
    <Router>
      <div className="container-fluid px-0 exceptFooter">
        <nav className="navbar fixed-top d-flex justify-content-center navbar-expand-sm navbar-dark bgNav">
          <div className="collapse navbar-collapse d-flex justify-content-around navItemBg">
            <div className="navbar-nav nav-item">
              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  color: "white",
                }}
                className="itemNav"
                to="/home"
              >
                <strong> Home</strong>
              </NavLink>
            </div>
            <div className="navbar-nav nav-item">
              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  color: "white",
                }}
                className="itemNav"
                to="/posts"
              >
                <strong> Posts</strong>
              </NavLink>
            </div>
            <div className="navbar-nav nav-item ">
              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  color: "white",
                }}
                className="itemNav"
                to="/pages"
              >
                <strong> Pages</strong>
              </NavLink>
            </div>
          </div>
        </nav>

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/posts" component={Posts}></Route>
          <Route exact path="/pages" component={Pages}></Route>
        </Switch>
      </div>
      <footer className="text-center ">
        Copyrights&nbsp;&copy;&nbsp;peerXP{" "}
      </footer>
    </Router>
  );
};

export default App;
