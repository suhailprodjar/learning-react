import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundry";
import HomePage from './pages/home/Home';
import './index.scss'
import isServer from "./helper/utils/isServer";
import isMobile from "./helper/utils/isMobile";
import Notification from "./components/Notification";
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
        <ErrorBoundary>
          <Switch>
            <Route path={['/', '/register-trainer',
              '/register-trainer-details',
              '/register-institute-details',
              '/learner/*']}
              exact={true}
              component={HomePage} />
            <Route path="/*"
              exact={true}
              component={NotFound} />
          </Switch>
        </ErrorBoundary>
        <Notification />
      </div>
    );
  }
}

export default App;