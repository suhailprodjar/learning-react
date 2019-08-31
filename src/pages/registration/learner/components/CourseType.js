import React, { useContext, useState, useEffect } from 'react';
import { withLastLocation } from "react-router-last-location";
import withStorage from '../../../../components/Storage';
import { PDGContext } from '../PDGContext';
import Header from './Header';
import Footer from './Footer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import triggerLearnerDetails from '../../../../redux/actions/triggerLearnerDetails';
import triggerNotification from '../../../../redux/actions/triggerNotification';

function CourseType(props) {
    const [{ course = '', location, mode = [], courseItems = [] }, dispatch] = useContext(PDGContext);
    useEffect(() => {
        if (courseItems.length) {
            dispatch({
                type: 'SELECT_COURSE',
                payload: {
                    courseItems: []
                }
            });
        }
        if (!course) {
            props.history.push('/learner/course')
        }
    })
    const [typesOfInterest, setValue] = useState(mode);
    const getIndex = (type) => {
        return typesOfInterest.indexOf(type)
    }

    const onSubmit = () => {
        const { userDetails = {} } = props;
        const { code = '' } = userDetails;
        dispatch({
            type: 'SELECT_COURSE_TYPE',
            payload: {
                mode: typesOfInterest
            }
        });
        props.setToSession('learner-pdg', {
            course: course,
            location: location,
            mode: typesOfInterest
        });
        if (code) {
            props.triggerLearnerDetails({
                learnerCode: code,
                course: [course],
                location,
                mode: typesOfInterest
            }).then(() => {
                props.history.replace('/');
            })
        } else {
            props.history.replace('register', {
                course,
                mode: typesOfInterest,
                location
            });
        }
    }
    const onChangeAction = (e, type) => {
        e && e.preventDefault();
        const index = getIndex(type);
        const { userDetails = {} } = props;
        const { code = '' } = userDetails;
        let modeValues = [];
        if (index === -1) {
            modeValues = [...typesOfInterest, type];
            setValue(modeValues);
            dispatch({
                type: 'MODE_GENERATED',
                payload: {
                    mode: modeValues
                }
            });
        } else {
            let interests = typesOfInterest;
            interests.splice(index, 1);
            modeValues = [...interests];
            setValue(modeValues)
            dispatch({
                type: 'MODE_GENERATED',
                payload: {
                    mode: modeValues
                }
            })
        }
        if (modeValues.length) {
            props.notificationHandler({
                messageText: `${code ? 'Awesome! Let’s roll right-away!...' : 'Ah, that’s some quality stuff mate!...'}`,
                isIdle: true,
                buttonText: `${code ? 'Callback' : 'Register'}`,
                buttonAction: onSubmit
            })
        } else {
            props.notificationHandler({})
        }
    }
    return (
        <div className={'pdg-4'}>
            <div className={'pdg-modal-content'}>
                <Header />
                <div className="pdg-modal-body">
                    <h2>Which location would you prefer for <b>{course} Training</b> classes?</h2>
                    <div className="clearfix pdgcard-outer">
                        <div className="pdg-card" onClick={(e) => onChangeAction(e, 'Home')}>
                            <input checked={getIndex('Home') > -1} name="option2" type="checkbox" id="opt_2_1" value="Home" />
                            <label for="opt_2_1">
                                <i className="round-tick"></i>
                                <img src="https://i.imgur.com/TmmbaIJ.png" alt='' />
                                <p>
                                    <span>My Home</span>
                                </p>
                            </label>
                        </div>
                        <div className="pdg-card" onClick={(e) => onChangeAction(e, 'Travel')}>
                            <input checked={getIndex('Travel') > -1} name="option2" type="checkbox" id="opt_2_2" value="Travel" />
                            <label for="opt_2_2">
                                <i className="round-tick"></i>
                                <img src="https://i.imgur.com/jc3LHBD.png" alt='' />
                                <p>
                                    <span>I am willing to travel</span>
                                </p>
                            </label>
                        </div>
                        <div className="pdg-card" onClick={(e) => onChangeAction(e, 'Center')}>
                            <input checked={getIndex('Center') > -1} name="option2" type="checkbox" id="opt_2_3" value="Center" />
                            <label for="opt_2_3">
                                <i className="round-tick"></i>
                                <img src="https://i.imgur.com/BF756bC.png" alt='' />
                                <p>
                                    <span>Institute or Coaching Center</span>
                                </p>
                            </label>
                        </div>
                        <div className="pdg-card" onClick={(e) => onChangeAction(e, 'Online')}>
                            <input checked={getIndex('Online') > -1} type="checkbox" id="opt_2_4" value="Online" />
                            <label for="opt_2_4">
                                <i className="round-tick"></i>
                                <img src="https://i.imgur.com/y3c7Mk2.png" alt='' />
                                <p>
                                    <span>Want to learn Online via Internet?</span>
                                </p>
                            </label>
                        </div>
                    </div>
                </div>
                <Footer onPrev={() => {
                    props.history.push('/learner/course')
                }} onNext={typesOfInterest.length ? onSubmit : null} />
            </div>
        </div>
    )
}

function mapStateToProps({ app = {} }) {
    const { userDetails = {} } = app;
    return {
        userDetails
    };
}

const mapDispatchToProps = dispatch => {
    return {
        triggerLearnerDetails: bindActionCreators(
            triggerLearnerDetails,
            dispatch
        ),
        notificationHandler: bindActionCreators(
            triggerNotification,
            dispatch
        )
    };
};

export default withLastLocation(
    withStorage(connect(mapStateToProps, mapDispatchToProps)(CourseType))
);