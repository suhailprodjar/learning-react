import React, { Component, Fragment } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Header from "./pages/header/header_component";
import Footer from "./pages/footer/footer_component";
import LandingComponent from "./pages/landing_component";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route path="/*" exact={true} component={LandingComponent} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;
