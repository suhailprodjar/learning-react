import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { withLastLocation } from "react-router-last-location";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeClass } from '../../../../helper/utils/removeClass';
import { checkMandatoryFields } from '../../../../helper/utils/validation';
import withStorage from '../../../../components/Storage';
import triggerLearnerRegister from '../../../../redux/actions/triggerLearnerRegister';
import triggerLearnerDetails from '../../../../redux/actions/triggerLearnerDetails';
class Register extends Component {

    state = {
        name: '',
        email: '',
        countryCode: "+91",
        mobileNumber: '',
        hasError: false
    }

    closeModal = (path = '/') => {
        const { history } = this.props;
        removeClass('TAG', 'body', 'show-modal');
        setTimeout(() => {
            history.push(path);
        }, 200)
    }

    onChangeAction = (e) => {
        e && e.preventDefault();
        const { name = '', value = '' } = e.target;
        if (this.state.hasError) {
            const validation = checkMandatoryFields({ ...this.state, [name]: value });
            this.setState({ [name]: value, ...validation });
        } else {
            this.setState({ [name]: value });
        }
    }

    triggerLearnerDetails = (learnerCode) => {
        const { history = {} } = this.props;
        const { state = {} } = history.location;
        const { course, location, mode } = state;
        this.props.triggerLearnerDetails({
            learnerCode,
            course: [course],
            location,
            mode
        }).then(() => {
            this.closeModal();
        }).catch(() => {
            this.closeModal();
        })
    } 
    onSubmit = (e) => {
        e && e.preventDefault();
        const { name } = this.state;
        const validation = checkMandatoryFields(this.state);
        if (!validation.hasError) {
            this.setState({
                isLoading: true
            }, () => {
                this.props.triggerLearnerRegister(this.state).then(({ code }) => {
                    this.props.setToStorage('learner-details', {
                        code,
                        name
                    });
                    this.triggerLearnerDetails(code);
                });
            })
        } else {
            this.setState(validation)
        }
    }
    render() {
        const {
            name = '',
            email = '',
            mobileNumber = '',
            hasError = false,
            emailError = false,
            nameError = false,
            mobileError = false
        } = this.state;
        return (
            <div className={'pdg-5'}>
                <div className={'pdg-modal-content'}>
                    <Header />
                    <div className="pdg-modal-body">
                        <h2>
                            <b>You are almost done</b><br />
                            <span>To submit your requirement, please provide your Name &amp;Phone number</span>
                        </h2>
                        <div className="clearfix form-wrapper">
                            <div className="form-group">
                                <input
                                    className={`${hasError && nameError ? 'has-error' : ''}`}
                                    type="text" value={name}
                                    name="name" placeholder="Name" onChange={this.onChangeAction} />
                            </div>
                            <div className="form-group">
                                <input
                                    className={`${hasError && emailError ? 'has-error' : ''}`}
                                    type="email" value={email} name="email" placeholder="Email Address" onChange={this.onChangeAction} />
                            </div>
                            <div className="form-group mbl-no">
                                <span>+91</span>
                                <input type="number"
                                    className={`${hasError && mobileError ? 'has-error' : ''}`}
                                    value={mobileNumber} name="mobileNumber" placeholder="Mobile Number" onChange={this.onChangeAction} />
                            </div>
                            <p className={`has-error ${hasError ? '' : 'd-none'}`}>*All fields are mandatory</p>
                            <div className="text-center">
                                <button onClick={this.onSubmit} className="btn primary-btn signup-btn">Sign up</button>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        triggerLearnerRegister: bindActionCreators(
            triggerLearnerRegister,
            dispatch
        ),
        triggerLearnerDetails: bindActionCreators(
            triggerLearnerDetails,
            dispatch
        )
    };
};

export default withLastLocation(
    withStorage(connect(null, mapDispatchToProps)(Register))
);