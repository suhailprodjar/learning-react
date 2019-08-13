import React, { Component } from "react";
import Scroll from "react-scroll";
import { contents } from '../../constants/content'
import { renderBreakElement } from "../../utils/renderHelpers";
const Element = Scroll.Element;
const Link = Scroll.Link;
export default class OurWork extends Component {
  state = {
    activeIndex: 0
  };

  callbackClick = (e, index) => {
    e && e.preventDefault();
    this.setState({
      activeIndex: index
    });
  };

  render() {
    const activeIndex = this.state.activeIndex;
    const { CUB, BUP, MUP, WCH } = contents.brands;
    const works = [
      "Create your brand",
      "Build your product",
      "Market your product",
      "We can help"
    ];
    const brands = [CUB, BUP, MUP, WCH];
    const getElement = index => {
      return (
        <div key={index} className="tab-pane active">
          <p className="shadow-text">{'OURWORKS'}</p>
          <div
            className="bg-image"
            style={{
              backgroundImage: `url(./images/tab-${index}.jpeg)`
            }}
          >          
          <p className="txt">{renderBreakElement(brands[index])}</p>
          </div>
        </div>
      );
    };
    const getLiElements = () => {
      return works.map((work, index) => {
        return (
          <li
            
            key={index}
            className={index === activeIndex ? "active" : ""}
          >
            <Link
              to={"Our works"}
              spy={true}
              onClick={e => this.callbackClick(e, index)}
              smooth={true}
              duration={100}
              offset={-72}
            >
              {work}
            </Link>
          </li>
        );
      });
    };
    return (
      <Element name="Our works">
        <div className="container-fluid our-works" id="ourworks">
          <div className="row">
            <div className="col-sm-6">
              <div className="row">
                <div className="tab-content">{getElement(activeIndex)}</div>
              </div>
            </div>
            <div className="col-sm-4 offset-sm-2 vertical-center">
              <ul className="list-unstyled mb-0" role="tablist">
                {getLiElements()}
              </ul>
            </div>
          </div>
        </div>
      </Element>
    );
  }
}
