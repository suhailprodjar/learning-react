import React, { Component } from 'react';
import { withLastLocation } from "react-router-last-location";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import triggerTutorRegister from '../../../redux/actions/triggerTutorRegister';
import { checkMandatoryFields } from '../../../helper/utils/validation';
import withStorage from '../../../components/Storage';
import { addClass } from '../../../helper/utils/addClass';
import { removeClass } from '../../../helper/utils/removeClass';
class Register extends Component {
    state = {
        name: '',
        email: '',
        countryCode: "+91",
        mobileNumber: '',
        gender: 'Male',
        courses: [],
        location: '',
        isInstitute: false,
        instituteName: '',
        isLoading: false
    }
    componentDidMount() {
        setTimeout(() => {
            addClass('TAG', 'body', 'show-modal');
        }, 200)
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
        if (name === 'courses') {
            this.setState({
                [name]: value.split(',')
            })
        } else {
            if (this.state.hasError) {
                const validation = checkMandatoryFields({ ...this.state, [name]: value });
                this.setState({ [name]: value, ...validation });
            } else {
                this.setState({ [name]: value });
            }
        }
    }
    onSubmit = (e) => {
        e && e.preventDefault();
        const { name, isInstitute } = this.state;
        const validation = checkMandatoryFields(this.state);
        if (!validation.hasError) {
            this.setState({
                isLoading: true
            }, () => {
                this.props.triggerTutorRegister(this.state).then(({ code }) => {
                    this.props.setToStorage('tutor-details', {
                        code,
                        name,
                        isInstitute
                    });
                    this.closeModal(
                        isInstitute ?
                            '/register-institute-details' :
                            '/register-trainer-details'
                    )
                });
            })
        } else {
            this.setState(validation)
        }
    }
    onChangeTrainerType = (value) => {
        this.setState({
            isInstitute: value,
            instituteName: ''
        });
    }
    render() {
        const {
            name = '',
            email = '',
            mobileNumber = '',
            location = '',
            isInstitute,
            instituteName = '',
            hasError = false,
            emailError = false,
            nameError = false,
            mobileError = false
        } = this.state;
        return (
            <div className="register-modal flex-modal">
                <div className="rg-modal-dialog">
                    <div className="rg-modal-header">
                        <i />
                        <span className="close-rg-modal" onClick={() => this.closeModal()}>Close</span>
                    </div>
                    <div className="rg-modal-body">
                        <div class="inner-content">
                            <div className="modal-img-outer">
                                <span className="modal-img"></span>
                            </div>
                            <div className="rg-modal-form">
                                <p className="heading-txt">Sign up as a tutor</p>
                                <form>
                                    <div className="form-group mb-24">
                                        <label for="opt1" className="control-option">
                                            <input name="option1" id="opt1" type="radio" value="option" checked={!isInstitute} onChange={() => this.onChangeTrainerType(false)} />
                                            <span>I am an individual</span>
                                            <i className="tick-icon"></i>
                                        </label>
                                        <label for="opt2" className="control-option">
                                            <input name="option1" id="opt2" type="radio" value="option" checked={isInstitute} onChange={() => this.onChangeTrainerType(true)} />
                                            <span>I run a institute</span>
                                            <i className="tick-icon"></i>
                                        </label>
                                    </div>
                                    {
                                        isInstitute ? <div className="form-group">
                                            <input
                                                type="text"
                                                placeholder="Institute Name"
                                                name="instituteName"
                                                value={instituteName}
                                                onChange={this.onChangeAction}
                                                required
                                            />
                                        </div> : null
                                    }
                                    <div className="form-group">
                                        <input
                                            className={`${hasError && nameError ? 'has-error' : ''}`}
                                            type="text"
                                            placeholder="Enter your Full name Eg: xxx"
                                            name="name"
                                            value={name}
                                            onChange={this.onChangeAction}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            className={`${hasError && emailError ? 'has-error' : ''}`}
                                            type="email"
                                            placeholder="Enter your mail id Eg: xxx@xxx.com"
                                            name="email"
                                            value={email}
                                            onChange={this.onChangeAction}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mbl-no">
                                        <input
                                            type="mobileNumber"
                                            className={`${hasError && mobileError ? 'has-error' : ''}`}
                                            placeholder="Enter your contact no Eg: 9715626138"
                                            name="mobileNumber"
                                            value={mobileNumber}
                                            pattern="[0-9]{10}"
                                            onChange={this.onChangeAction}
                                            required
                                        />
                                        <span>+91</span>
                                    </div>
                                    {isInstitute ? null : <div className="form-group">
                                        <div className="control-select">
                                            <select name={'gender'} onChange={this.onChangeAction}>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>}
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            placeholder="Enter your category you teach Eg: React, Angular, ..."
                                            name="courses"
                                            onChange={this.onChangeAction}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            placeholder="Enter your address"
                                            name="location"
                                            value={location}
                                            onChange={this.onChangeAction}
                                        />
                                    </div>
                                    <p className={`${hasError ? 'has-error' : 'd-none'}`}>{`*Highlighted Fields are mandatory`}</p>
                                    <div class="text-right" onClick={this.onSubmit}>
                                        <button type='submit' className="btn">Create Profile</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        triggerTutorRegister: bindActionCreators(
            triggerTutorRegister,
            dispatch
        )
    };
};

export default withLastLocation(
    withStorage(connect(null, mapDispatchToProps)(Register))
);