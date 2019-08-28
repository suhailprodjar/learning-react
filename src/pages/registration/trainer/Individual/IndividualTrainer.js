import React, { Component } from 'react';
import { withLastLocation } from "react-router-last-location";
class IndividualTrainer extends Component {
    componentDidMount() {
        setTimeout(() => {
            document.getElementsByTagName('body')[0].classList.add('show-modal')
        }, 200)
    }

    closeModal = () => {
        document.getElementsByTagName('body')[0].classList.remove('show-modal')
        setTimeout(() => {
            this.props.history.replace('/');
        }, 200)
    }
    render() {
        return (
            <div className="register-modal flex-modal">
                <div className="rg-modal-content">
                    <div className="rg-modal-header">
                        <i/>
                        <span className="close-rg-modal" onClick={this.closeModal}>Close</span>
                    </div>
                    <div className="rg-modal-body">
                        <div className="modal-img-outer">
                            <span className="modal-img"></span>
                        </div>
                        <div className="rg-modal-form">
                            <p className="heading-txt">Sign up as a tutor</p>

                            <form>
                                <div className="form-group">
                                    <input type="text" placeholder="Institute Name" name="" />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        placeholder="Enter your Full name Eg: Sasikumar"
                                        name=""
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        placeholder="Enter your Full name Eg: Sasikumar"
                                        name=""
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="number"
                                        placeholder="Enter your mobile number"
                                        name=""
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="number"
                                        placeholder="Enter your main category you teach more could be added later"
                                        name=""
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="number" placeholder="Location" name="" />
                                </div>
                                <div className="text-right">
                                    <button className="btn">Create Profile</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withLastLocation(IndividualTrainer);