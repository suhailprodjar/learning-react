import HomePage from "./pages/home";
import App from "./App";

export default [
  {
    component: App,
    routes: [
      {
        component: HomePage,
        path: "/",
        exact: true
      }
    ]
  }
];
