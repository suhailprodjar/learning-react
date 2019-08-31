import React, { useContext, useState, useEffect } from 'react';
import { withLastLocation } from "react-router-last-location";
import withStorage from '../../../../components/Storage';
import { PDGContext } from '../PDGContext';
import Header from './Header';
import Footer from './Footer';
import searchCourse from '../learner-helper/searchCourse';


function Course(props) {
    const [{ courseItems = [], course, location, courseTypes = [] }, dispatch] = useContext(PDGContext);
    const [searchValue, setValue] = useState('');
   
    const onSubmit = (value) => {
        value = value ? value : searchValue;
        dispatch({
            type: 'SELECT_COURSE',
            payload: {
                course: value
            }
        });
        props.setToSession('learner-pdg', {
            course: value,
            location: location,
            courseTypes: courseTypes
        });
        props.history.replace('course/type');
    }
    const onChangeAction = (e) => {
        e && e.preventDefault();
        const { value } = e.target;
        setValue(value);
        searchCourse(value, (data) => {
            dispatch({
                type: 'SET_COURSES',
                payload: {
                    courseItems: data
                }
            });
        });
    }
    const onClickAction = (e) => {
        e && e.preventDefault();
        dispatch({
            type: 'SELECT_COURSE',
            payload: {
                course: e.target.value
            }
        });
        props.setToSession('learner-pdg', {
            course: e.target.value,
            location: location,
            courseTypes: courseTypes
        });
        props.history.replace('course/type');
    }
    return (
        <div className={'pdg-1'}>
            <div className={'pdg-modal-content'}>
                <Header />
                <div className="pdg-modal-body">
                    <h2>Find Tutors, Trainers &amp; Institutes near you.</h2>
                    <div className="clearfix search-form">
                        <div className="form-group">
                            <input type="text" name=""
                                onChange={onChangeAction}
                                onKeyDown={(e) => {
                                    if (e.keyCode === 13) {
                                        onSubmit();
                                    }
                                }}
                                defaultValue={course}
                                placeholder="Enter categories e.g. Maths, Java, French" />
                            <i className=" pyt-search-24" onClick={() => onSubmit()} ></i>
                        </div>
                        <ul className="dropdown-list list-unstyled">
                            {
                                courseItems.map((items, index) => {
                                    return (
                                        <li key={index} value={items.course} onClick={onClickAction}>{items.course}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <Footer onPrev={null} onNext={courseTypes.length ? () => {
                    props.history.replace('course/type')
                } : null} />
            </div>
        </div>
    )
}
export default withLastLocation(
    withStorage(Course)
);