import React from "react";
import HomeBanner from "./banner";
import HowToWorks from "./works";
import Quality from "./quality";
import Testimonials from "./testimonials";

function HomePage() {
  return (
    <div className={"home"}>
      <HomeBanner />
      <HowToWorks />
      <Quality />
      <Testimonials />
    </div>
  );
}

export default HomePage;
