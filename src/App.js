import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundry";
import { HomeLoadable } from "./components/LoadableComponents";
import Home from './pages/home';
import './index.scss'
class App extends Component {
  render() {
    return (
      <div className={'content-wrap'}>
        <ErrorBoundary>
          <Switch>
            <Route path="/"
              exact={true}
              component={Home} />
          </Switch>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
