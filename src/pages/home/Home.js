import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import HomeBanner from "./HomeBanner";
import HowToWorks from "./OurWorks";
import Quality from "./OurQuality";
import Testimonials from "./Reviews";
import Header from './Helmet';
import Navbar from "../utils_page/Navbar";
import IndividualTrainer from "../registration/trainer/Individual/IndividualTrainer";
import InstituteTrainer from "../registration/trainer/Institute/InstituteTrainer";
import DetailTrainer from "../registration/trainer/Individual/DetailsTrainer";
import DetailInstitute from "../registration/trainer/Institute/DetailInstitute";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getUserDetails from "../../redux/actions/getUserDetails";
import { removeClass } from "../../helper/utils/removeClass";
function HomePage(props) {
  useEffect(() => {
    removeClass('TAG', 'body', 'show-modal');
    removeClass('CLASS', 'bg-overlay', 'pdg-overlay');
    if (!props.code) {
        props.getUserDetails();
    }
  }, [])
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
        <Route path="/register-institute"
          exact={true}
          component={InstituteTrainer}
        />
        <Route path="/register-trainer-details"
          exact={true}
          component={DetailTrainer} />
        <Route path="/register-institute-details"
          exact={true}
          component={DetailInstitute} />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
      getUserDetails: bindActionCreators(
          getUserDetails,
          dispatch
      )
  };
};

function mapStateToProps({ app = {} }) {
  const { code = '' } = app;
  return {
    code
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
