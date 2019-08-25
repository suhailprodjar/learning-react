import React from "react";
import Loadable from "react-loadable";

// Home page loadable component
export const HomeLoadable = Loadable({
  loader: () => import(/* webpackChunkName: "home-page" */ "../../pages/home"),
  loading: () => <div />
});
