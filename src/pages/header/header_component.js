import React, { Component, Fragment } from "react";
import Scroll from "react-scroll";
const Link = Scroll.Link;

export default class Header extends Component {
  state = {
    sliderClassName: "hamburger-icon"
  };
  toggleSliderOption = () => {
    const element = document.body;
    element.className = element.className ? "" : "show-menu scroll-locked";
    this.setState({
      sliderClassName: element.className
        ? "hamburger-icon open"
        : "hamburger-icon"
    });
  };

  render() {
    const headerLinks = ["About", "Our works", "Benefits", "Contact us"];
    const headerElements = () => {
      return headerLinks.map((link, key) => {
        return (
          <li key={key}>
            <Link
              to={link}
              spy={true}
              smooth={true}
              duration={100}
              offset={-72}
            >
              {link}
            </Link>
          </li>
        );
      });
    };
    return (
      <Fragment>
        <div className="off--canvas--menu">
          <nav className="menu">
            <ul className="menu__list list-unstyled">{headerElements()}</ul>
          </nav>
        </div>
        <header className="navbar-outer" id="header">
          <nav>
            <div className="container">
              <div className="row">
                <div className="col-8 col-sm-4">
                  <a href="# " className="logo">
                    <img src="./images/logo.png" alt="logo" />
                  </a>
                </div>
                <div className="col-4 col-sm-8">
                  <div className="float-right">
                    <ul className="rgt--links list-unstyled d-none d-sm-block">
                      {headerElements()}
                    </ul>

                    <div
                      className={this.state.sliderClassName}
                      onClick={this.toggleSliderOption}
                    >
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </Fragment>
    );
  }
}
