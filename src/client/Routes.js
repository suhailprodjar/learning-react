import HomePage from "./pages/home";
import App from "./App";
import AdminLogin from "./pages/admin/Login";
import IndividualTrainer from "./pages/registration/trainer/Individual/IndividualTrainer";
import Learner from "./pages/registration/learner";

export default [
  {
    component: App,
    routes: [
      {
        component: HomePage,
        path: "/",
        exact: true
      }, {
        component: AdminLogin,
        path: "/admin-login",
        exact: true
      }, {
        component: IndividualTrainer,
        path: "/register-trainer",
        exact: true
      }, {
        component: Learner,
        path: "/register-learner",
        exact: true
      }
    ]
  }
];
