import React from "react";
import ErrorBoundary from "./components/ErrorBoundry";
import Header from "./pages/home/header";
import { withRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Routes from "./Routes";

const App = ({ route }) => {
  return (
    <div>
      <Header />
      <div className="content-wrap">
        <ErrorBoundary>{renderRoutes(route.routes)}</ErrorBoundary>
      </div>
    </div>
  );
};

export default App;
