import React from 'react';
import isMobile from '../helper/utils/isMobile';

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ul className="clearfix ftr-list list-unstyled">
                            <li>
                                <p>
                                    <span>LearnGrow</span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Suspendisse iaculis ut diam eget tincidunt. Sed nec elementum
                                    ipsum, eu placerat justo. Integer sollicitudin ultricies
                                    lectus nec lacinia.
                                </p>
                            </li>
                            <li className="text-center">
                                <ul className="social-icons list-unstyled">
                                    <li>
                                        <a href="/"><i className="pyt-facebook-16"></i></a>
                                    </li>
                                    <li>
                                        <a href="/"><i className="pyt-twitter-16"></i></a>
                                    </li>
                                    <li>
                                        <a href="/"><i className="pyt-instagram-16"></i></a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p>
                                    <span>Get it touch us</span>
                                </p>
                                <a href="/">hello@prodjar.com</a><br />
                                <a href="/">+91 97156 26138</a>
                            </li>
                        </ul>

                        <div className="row">
                            <div className="col-12 col-sm-6">
                                copyright @2019 at Prodjar
                            </div>

                            <div className={`col-12 col-sm-6 is_mobile ${isMobile() ? 'text-center' : 'text-right'}`}>
                                powered by Prodjar
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;