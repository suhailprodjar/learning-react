import React, { Component, Fragment } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Header from './pages/home/header';
import Home from './pages/home';
class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route path="/*" exact={true} component={Home} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
