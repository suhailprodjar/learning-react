import React, { Component } from "react";
import Scroll from "react-scroll";
import { contents } from '../../constants/content'
import { renderParaElement } from "../../utils/renderHelpers";
const Element = Scroll.Element;

export default class AboutUS extends Component {
  render() {
    const aboutUSContent = renderParaElement(contents.aboutUS);
    return (
      <Element name="About">
        <div className="about-us" id="aboutus">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 left-txt">
                {aboutUSContent}
              </div>
              <div className="col-sm-4 right-txt vertical-center">
                <p>
                  <span>Who</span> we are
                </p>
              </div>
            </div>
          </div>
        </div>
      </Element>
    );
  }
}
