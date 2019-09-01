import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundry";
import HomePage from './pages/home/Home';
import './index.scss'
import Footer from "./pages/utils_page/Footer";
import isServer from "./helper/utils/isServer";
import isMobile from "./helper/utils/isMobile";
import Notification from "./components/Notification";
import Navbar from "./pages/utils_page/Navbar";
import { removeClass } from "./helper/utils/removeClass";
import { addClass } from "./helper/utils/addClass";
import NotFound from "./pages/utils_page/NotFound";
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
        <Navbar />
        <ErrorBoundary>
          <Switch>
            <Route path="/404"
              exact={true}
              component={NotFound} />
            <Route path="/*"
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