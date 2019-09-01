import React, { Component } from 'react';
import { withLastLocation } from "react-router-last-location";
import withStorage from '../../../../components/Storage';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addClass } from '../../../../helper/utils/addClass';
import { removeClass } from '../../../../helper/utils/removeClass';
import triggerTrainerDetails from '../../../../redux/actions/triggerTrainerDetails';

class DetailTrainer extends Component {

    state = {
        enquireDistance: 5,
        speak: ['English'],
        mode: ['Student Home'],
        experience: '',
        degree: ''
    }
    componentDidMount() {
        const { history = {}, tutorDetails = {} } = this.props;
        const { code = '' } = tutorDetails || {};
        if (!code) {
            history.replace('/register-trainer')
        }
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
        e && e.preventDefault && e.preventDefault();
        const { value = '', name = '' } = e.target;
        if (this.state.hasError) {
            const validation = this.checkMandatoryFields();
            this.setState({
                [name]: value,
                ...validation
            });
        } else {
            this.setState({
                [name]: value
            });
        }
    }

    onChangeMode = (value = '', target = 'speak') => {
        let mode = this.state[target] || [];
        const index = mode.indexOf(value);
        if (index === -1) {
            this.setState({
                [target]: [...mode, value]
            })
        } else {
            let modeValues = mode;
            modeValues.splice(index, 1);
            modeValues = [...modeValues];
            this.setState({
                [target]: modeValues
            })
        }
    }
    
    checkMandatoryFields = () => {
        const { experience, degree } = this.state;
        return {
            hasError: !(experience && degree),
            experienceError: experience ? false : true,
            degreeError: degree ? false : true
        }
    }

    onSubmit = (e) => {
        e && e.preventDefault();
        const { triggerTrainerDetails, tutorDetails = {} } = this.props;
        const { code = '' } = tutorDetails || {};
        const {
            enquireDistance = 5,
            speak,
            mode,
            experience
        } = this.state;
        const validation = this.checkMandatoryFields();
        if (!validation.hasError) {
            triggerTrainerDetails({
                tutorCode: code,
                enquireDistance,
                experience: +experience,
                speak: speak.length ? speak : ['English'],
                mode: mode.length ? mode : ['Institute']
            }).then(() => this.closeModal()).catch(() => this.closeModal())
        } else {
            this.setState(validation)
        }
    }
    render() {
        const {
            enquireDistance = 5,
            degree = '',
            experience = '',
            hasError = false,
            degreeError = false,
            experienceError = false
        } = this.state;
        return (
            <div className="register-modal img-right">
                <div className="rg-modal-dialog">
                    <div className="rg-modal-header">
                        <i/>
                        <span className="close-rg-modal" onClick={() => this.closeModal()}>Close</span>
                    </div>
                    <div className="rg-modal-body">
                        <div className="inner-content">
                            <div className="modal-img-outer">
                                <span className="modal-img"></span>
                            </div>
                            <div className="rg-modal-form">
                                <p className="heading-txt">You are just few steps away from contacting students</p>

                                <form>
                                    
                                    <div className="form-group mb-24">
                                        <p>Add language that you speak <i class="error">*</i></p>
                                        {
                                            ['English', 'Hindi', 'Tamil', 'Other'].map((m, i) => {
                                                return (
                                                    <label key={i} for={`opt${i}_1`} className="control-option">
                                                        <input
                                                            name={`option${i}_1`}
                                                            id={`opt${i}_1`}
                                                            defaultChecked={'English' === m}
                                                            type="checkbox"
                                                            onChange={() => this.onChangeMode(m, 'speak')}
                                                            value={m} />
                                                        <span>{m}</span>
                                                        <i className="radio-icon"></i>
                                                    </label>
                                                )
                                            })
                                        }
                                    </div>
                                    <div class="form-group">
                                        <p>Add you most recent degree <i class="error">*</i></p>
                                        <input
                                            className={`${hasError && degreeError ? 'has-error' : ''}`}
                                            type="text"
                                            placeholder="Degree, University, Year of passed"
                                            name="degree" value={degree}
                                            onChange={this.onChangeAction} 
                                        />
                                    </div>

                                    <div className="form-group mb-24">
                                        <p className="mt-32">Where do you provide this service? <i className="error">*</i></p>
                                        {
                                            ['Student Home', 'Home', 'Online'].map((n, i) => {
                                                return (
                                                    <label key={i} for={`opt${i}_2`} className="control-option">
                                                        <input
                                                            name={`option${i}_2`}
                                                            id={`opt${i}_2`}
                                                            defaultChecked={'Student Home' === n}
                                                            type="checkbox"
                                                            onChange={() => this.onChangeMode(n, 'mode')}
                                                            value={n} />
                                                        <span>{n === 'Online' ? 'will you be teaching online?' : n}</span>
                                                        <i className="radio-icon"></i>
                                                    </label>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="form-group mb-24">
                                        <p>What distance do you want to receive enquires from students? <i className="error">*</i></p>
                                        {
                                            [5, 10, 15, 20, 25].map((m, i) => {
                                                return (
                                                    <label key={i} className="control-option">
                                                        <input
                                                            type="radio"
                                                            name={`enquireDistance`}
                                                            defaultChecked={+enquireDistance === m}
                                                            onChange={() => this.onChangeAction({
                                                                target: {
                                                                    value: m,
                                                                    name: 'enquireDistance'
                                                                }
                                                            })}
                                                            value={m} />
                                                        <span>{m}</span>
                                                        <i className="radio-icon"/>
                                                    </label>
                                                )
                                            })
                                        }
                                    </div>
                                    <div class="form-group">
                                        <p>What is your total experience <i class="error">*</i></p>
                                        <input
                                            className={`${hasError && experienceError ? 'has-error' : ''}`}
                                            type="text"
                                            placeholder="Experience in years"
                                            name="experience" value={experience}
                                            onChange={this.onChangeAction}
                                        />
                                    </div>
                                    <div className="text-right">
                                        <button onClick={this.onSubmit} className="btn">Save</button>
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
        triggerTrainerDetails: bindActionCreators(
            triggerTrainerDetails,
            dispatch
        )
    };
};

function mapStateToProps({ app = {} }) {
    const { tutorDetails = {} } = app;
    return {
        tutorDetails
    };
}

export default withLastLocation(
    withStorage(connect(mapStateToProps, mapDispatchToProps)(DetailTrainer))
);;