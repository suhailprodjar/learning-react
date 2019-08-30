import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundry";
import HomePage from './pages/home/Home';
import './index.scss'
import Footer from "./pages/utils_page/Footer";
import isServer from "./helper/utils/isServer";
import isMobile from "./helper/utils/isMobile";
import Notification from "./components/Notification";
class App extends Component {

  componentDidMount = () => {
    if (!isServer()) {
      let element = document.getElementsByClassName('is_hide-hdr')[0];
      if (isMobile()) {
        element.classList.remove('hide-hdr');
      } else {
        element.classList.add('hide-hdr');
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
            <Route path="/register-trainer"
              exact={true}
              component={HomePage} />
            <Route path="/detail-trainer"
              exact={true}
              component={HomePage} />
            <Route path="/register-instituter"
              exact={true}
              component={HomePage} />
            <Route path="/detail-instituter"
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
