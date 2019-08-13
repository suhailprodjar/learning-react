import React, { Component } from "react";
import { renderBreakElement } from '../../utils/renderHelpers';
import { contents } from "../../constants/content";

export default class Brand extends Component {
  textType = (el, toRotate, period) => {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "UI";
    this.tick();
    this.isDeleting = false;
  };

  tick = () => {
    const fullTxt = this.toRotate[this.loopNum % this.toRotate.length];
    let delta = 200 - Math.random() * 100;
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span><a href=" ">.</a>' + this.txt + '<b>|</b></span>';
    if (this.isDeleting) {
      delta /= 2;
    }
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
    setTimeout( () => {
      this.tick();
    }, delta);
  };
  componentDidMount() {
    const elements = document.getElementsByClassName("typewrite");
    const count = elements.length;
    for (let i = 0; i < count; i++) {
      const toRotate = elements[i].getAttribute("data-type");
      if (toRotate) {
        this.textType(elements[i], JSON.parse(toRotate), elements[i].getAttribute("data-period"));
      }
    }
  }
  render() {
    const style = {
      backgroundImage: "url(./images/banner.png)"
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="hero-sec" style={style}>
              <h1>
                <span>
                  Prodjar is {' '}
                  <b
                    className="typewrite"
                    data-type='[ "UI/UX Design", "App Develop", "Web Develop", "Marketing" ]'
                  >
                    UI/UX Design
                  </b>
                </span>
                {renderBreakElement(contents.subContents)}
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
