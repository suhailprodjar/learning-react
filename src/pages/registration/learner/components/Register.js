import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
class Register extends Component {
    render() {
        return (
            <div className={'pdg-5'}>
                <div className={'pdg-modal-content'}>
                    <Header />
                    <div className="pdg-modal-body">
                        <h2>
                            <b>You are almost done</b><br/>
                            <span>To submit your requirement, please provide your Name &amp;Phone number</span>
                        </h2>
                        <div className="clearfix form-wrapper">
                            <div className="form-group">
                                <input type="text" name="" placeholder="Name" value=""/>
                            </div>
                            <div className="form-group">
                                <input type="email" name="" placeholder="Email Address" value=""/>
                            </div>
                            <div className="form-group mbl-no">
                                <span>+91</span>
                                <input type="number" name="" placeholder="Mobile Number" value=""/>
                            </div>
                            <p><span className="float-right">Resend OTP</span></p>
                            <div className="text-center">
                                <button className="btn signup-btn">Sign up</button>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}
export default Register;