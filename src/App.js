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
import Navbar from "./pages/utils_page/Navbar";
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
        <Navbar />
        <ErrorBoundary>
          <Switch>
            <Route path="/"
              exact={true}
              component={HomePage} />
            <Route path="/learner/course"
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