import React, { Component } from 'react';
import { withLastLocation } from "react-router-last-location";
import withStorage from '../../../../components/Storage';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addClass } from '../../../../helper/utils/addClass';
import { removeClass } from '../../../../helper/utils/removeClass';
import triggerInstitueDetails from '../../../../redux/actions/triggerInstitueDetails';

class DetailInstitute extends Component {

    state = {
        address: '',
        mode: ['Institute'],
        enquireDistance: 5,
        address1: '',
        address2: '',
        landmark: '',
        city: ''
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
        this.setState({
            [name]: value
        });
    }

    onChangeMode = (value = '') => {
        let { mode = [] } = this.state;
        const index = mode.indexOf(value);
        if (index === -1) {
            this.setState({
                mode: [...mode, value]
            })
        } else {
            let modeValues = mode;
            modeValues.splice(index, 1);
            modeValues = [...modeValues];
            this.setState({
                mode: modeValues
            })
        }
    }

    onSubmit = (e) => {
        e && e.preventDefault();
        const { triggerInstitueDetails, tutorDetails = {} } = this.props;
        const { code = '' } = tutorDetails || {};
        const {
            enquireDistance = 5,
            address1 = '',
            address2 = '',
            landmark = '',
            city = '',
            mode
        } = this.state;
        triggerInstitueDetails({
            tutorCode: code,
            address: address1 + ',' + address2 + ',' + landmark + ',' + city,
            enquireDistance,
            mode: mode.length ? mode : ['Institute']
        }).then(() => this.closeModal()).catch(() => this.closeModal())
    }
    render() {
        const {
            enquireDistance = 5,
            address1 = '',
            address2 = '',
            landmark = '',
            city = ''
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
                                    <div className="form-group">
                                        <p>Add Main Branch Address</p>
                                        <input type="text" placeholder="Address Line 1" name="address1" value={address1} onChange={this.onChangeAction} />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="Address Line 2" name="address2" value={address2} onChange={this.onChangeAction} />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="Landmark"  name="landmark" value={landmark} onChange={this.onChangeAction} />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="city"  name="city" value={city} onChange={this.onChangeAction} />
                                    </div>

                                    <div className="form-group mb-24">
                                        <p className="mt-32">Where do you take classes? <i className="error">*</i></p>
                                        {
                                            ['Institute', 'Online'].map((m, i) => {
                                                return (
                                                    <label key={i} for={`opt${i}_2`} className="control-option">
                                                        <input
                                                            name={`option${i}_2`}
                                                            id={`opt${i}_2`}
                                                            defaultChecked={'Institute' === m}
                                                            type="checkbox"
                                                            onChange={() => this.onChangeMode(m)}
                                                            value={m} />
                                                        <span>{i ? 'will you be teaching online?' : 'My institue'}</span>
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
        triggerInstitueDetails: bindActionCreators(
            triggerInstitueDetails,
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
    withStorage(connect(mapStateToProps, mapDispatchToProps)(DetailInstitute))
);;