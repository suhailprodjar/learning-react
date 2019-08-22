import React, { Component } from "react";

const is_server = () => {
  return !(typeof window !== 'undefined' && window.document);
}


const isMobile = () => {
  if (!is_server()) {
    return window.innerWidth <= 991;
  }
};

export default class Footer extends Component {
  

  render() {
    return (
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="clearfix list-unstyled">
                <li>
                  <p>
                    <span>LearnGrow</span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis ut diam eget tincidunt. Sed nec elementum ipsum, eu placerat justo. Integer sollicitudin ultricies lectus nec lacinia.
                  </p>
                </li>
                <li className="text-center">Lorem ipsum</li>
                <li>
                  <p>
                    <span>Get it touch us</span>
                  </p>
                  <a href="">hello@prodjar.com</a><br />
                  <a href="">+91 95006 30513</a>
                </li>
              </ul>

              <div className="row">
                <div className="col-12 col-sm-6">
                  copyright @2019 at Sasikumar Palanisamy 
                </div>
                <div className={`col-12 col-sm-6 ${isMobile() ? 'text-center' : 'text-right'}`}>
                  powered by Prodjar
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
