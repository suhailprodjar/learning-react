import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundry";
import HomePage from './pages/home/Home';
import './index.scss'
import Footer from "./pages/utils_page/Footer";
import isServer from "./helper/utils/isServer";
import isMobile from "./helper/utils/isMobile";
import Notification from "./components/Notification";
import Learner from './pages/registration/learner/Learner'
import { removeClass } from "./helper/utils/removeClass";
import { addClass } from "./helper/utils/addClass";
class App extends Component {

  componentDidMount = () => {
    if (!isServer()) {
      if (isMobile()) {
        removeClass('CLASS', 'is_hide-hdr', 'hide-hdr');
      } else {
        addClass('CLASS', 'is_hide-hdr', 'hide-hdr');
      }
    }
  }
  render() {
    return (
      <div className={'content-wrap'}>
        <ErrorBoundary>
          <Switch>
            <Route path="/"
              exact={true}
              component={HomePage} />
            <Route path="/learner/*"
              exact={true}
              component={Learner} />
            <Route path="/register-trainer"
              exact={true}
              component={HomePage} />
            <Route path="/register-trainer-details"
              exact={true}
              component={HomePage} />
            <Route path="/register-institute"
              exact={true}
              component={HomePage} />
            <Route path="/register-institute-details"
              exact={true}
              component={HomePage} />
          </Switch>
        </ErrorBoundary>
        <Footer />
        <div className="bg-overlay"></div>
        <Notification />
      </div>
    );
  }
}

export default App;