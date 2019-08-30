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
function HomePage(props) {
  useEffect(() => {
    if (props.tutorCode) {
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
        <Route path="/register-instituter"
          exact={true}
          component={InstituteTrainer}
        />
        <Route path="/detail-trainer"
          exact={true}
          component={DetailTrainer} />
        <Route path="/detail-instituter"
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
  const { tutorCode = '' } = app;
  return {
    tutorCode
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
