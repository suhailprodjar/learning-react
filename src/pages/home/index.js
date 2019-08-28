import React from "react";
import HomeBanner from "./banner";
import HowToWorks from "./works";
import Quality from "./quality";
import Testimonials from "./testimonials";
import Header from './header';
import Navbar from "../navbar";

function HomePage() {
  return (
    <div className="home">
      {/* <Header /> */}
      <Navbar />
      <HomeBanner />
      <HowToWorks />
      <Quality />
      <Testimonials />
    </div>
  );
}

export default HomePage;
