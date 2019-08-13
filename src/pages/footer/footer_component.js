import React, { Component } from "react";
import Scroll from "react-scroll";
import { contents } from '../../constants/content'
import { renderBreakElement } from "../../utils/renderHelpers";
const Element = Scroll.Element;
const Link = Scroll.Link;
export default class Footer extends Component {
  render() {
    const footerContents = renderBreakElement(contents.footer);
    return (
      <Element name="Contact us">
        <footer className="site-footer" id="contactus">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <hr className="mt-0" />
                <p>
                  <a href="/" className="logo">
                    <img src="./images/logo.png" alt="logo" />
                  </a>
                </p>
                <p className="txt">
                  {footerContents}
                </p>
                <p>
                  <span>Get in Touch with Us</span>
                  <Link
                    to={"CBR"}
                    spy={true}
                    smooth={true}
                    duration={100}
                    offset={-72}
                  >
                    <i className="jaricon-envelope" /> hello@prodjar.com
                  </Link>
                </p>
                <hr className="mt-0" />
              </div>
            </div>
            <div className="row ftr-icon">
              <div className="col-sm-4">
                <p>Copyrights @ 2019 prodjar - #BuiltinChennai</p>
              </div>
              <div className="col-sm-4">
                <ul className="list-unstyled mb-0">
                  <li />
                </ul>
              </div>
              <div className="col-sm-4">
                <p>
                  <a href="/">Privacy policy</a>
                  {' '}|{' '}
                  <a href="/">Terms of Service</a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </Element>
    );
  }
}
