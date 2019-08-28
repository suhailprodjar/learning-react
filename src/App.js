import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundry";
import Home from './pages/home';
import './index.scss'
import Footer from "./pages/footer";
import isServer from "./helper/utils/isServer";
import isMobile from "./helper/utils/isMobile";
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
              component={Home} />
            <Route path="/register-trainer"
              exact={true}
              component={Home} />
          </Switch>
        </ErrorBoundary>
        <Footer />
        <div className="bg-overlay"></div>
      </div>
    );
  }
}

export default App;
