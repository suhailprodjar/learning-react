import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeBanner from "./banner";
import HowToWorks from "./works";
import Quality from "./quality";
import Testimonials from "./testimonials";
import Header from './header';
import Navbar from "../navbar";
import IndividualTrainer from "../registration/trainer/Individual/IndividualTrainer";
import InstituteTrainer from "../registration/trainer/Institute/InstituteTrainer";

function HomePage() {
  return (
    <div className="home">
      <Header />
      <Navbar />
      <HomeBanner />
      <HowToWorks />
      <Quality />
      <Testimonials />
      <Switch>
        <Route path="/register-trainer"
          exact={true}
          component={IndividualTrainer}
        />
        <Route path="/register-instituter"
          exact={true}
          component={InstituteTrainer}
        />
      </Switch>
    </div>
  );
}

export default HomePage;
