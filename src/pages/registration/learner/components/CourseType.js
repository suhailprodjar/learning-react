import React from 'react';
import Header from './Header';
import Footer from './Footer';
function CourseType() {
    return (
        <div className={'pdg-4'}>
            <div className={'pdg-modal-content'}>
                <Header />
                <div className="pdg-modal-body">
                    <h2>Which location would you prefer for <b>PHP Training</b> classes?</h2>
                    <div className="clearfix pdgcard-outer">
                        <div className="pdg-card">
                            <input name="option2" type="checkbox" id="opt_2_1" value="Option"/>
                            <label for="opt_2_1">
                                <i className="round-tick"></i>
                                <img src="https://i.imgur.com/TmmbaIJ.png"/>
                                <p>
                                    <span>My Home</span>
                                </p>
                            </label>
                        </div>
                        <div className="pdg-card">
                            <input name="option2" type="checkbox" id="opt_2_2" value="Option"/>
                            <label for="opt_2_2">
                                <i className="round-tick"></i>
                                <img src="https://i.imgur.com/jc3LHBD.png"/>
                                <p>
                                    <span>I am willing to travel</span>
                                </p>
                            </label>
                        </div>
                        <div className="pdg-card">
                            <input name="option2" type="checkbox" id="opt_2_3" value="Option"/>
                            <label for="opt_2_3">
                                <i className="round-tick"></i>
                                <img src="https://i.imgur.com/BF756bC.png"/>
                                <p>
                                    <span>Institute or Coaching Center</span>
                                </p>
                            </label>
                        </div>
                        <div className="pdg-card">
                            <input name="option2" type="checkbox" id="opt_2_4" value="Option"/>
                            <label for="opt_2_4">
                                <i className="round-tick"></i>
                                <img src="https://i.imgur.com/y3c7Mk2.png"/>
                                <p>
                                    <span>Want to learn Online via Internet?</span>
                                </p>
                            </label>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
export default CourseType;