import React, { Component } from "react";
import CBR from "./cbr_component";
import Scroll from "react-scroll";
import { contents } from '../../constants/content'
import { renderListElement } from "../../utils/renderHelpers";
const Element = Scroll.Element;

export default class Benefits extends Component {
  render() {
    const benefitsContent = renderListElement(contents.benefits);
    return (
      <Element name="Benefits">
        <div className="benefits" id="benefits">
          <div className="left-col">
            <div className="content">
              <p>Why we are</p>
              <ul className="list-unstyled">
                {benefitsContent}
              </ul>
            </div>
          </div>
          <CBR />
        </div>
      </Element>
    );
  }
}
