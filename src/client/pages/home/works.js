import React from "react";
import { connect } from "react-redux";

function WorksSection({ works = [] }) {
  return works.map((work, index) => {
    return (
      <div className="col-12 col-sm-4" key={IDBIndex}>
        <div className="card-wrap active">
          <i className="pyt-star-outline-16"></i>
          <p>
            <span>{work.header}</span>
            {work.content}
          </p>
        </div>
      </div>
    );
  });
}

function HowToWorks({ works }) {
  return (
    <div className="how-to-works">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="heading-txt">How to works?</h3>
            <p className="heading-txt">
              LearnGrow is India’s largest online platform with a network of
              most trusted local Tutors across India. Post and connect with the
              tutors in your locality.
            </p>

            <div className="row">
              <WorksSection works={works} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps({ app = {} }) {
  const { works = [] } = app;
  return {
    works
  };
}

export default connect(
  mapStateToProps,
  null
)(HowToWorks);
