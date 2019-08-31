import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { withLastLocation } from "react-router-last-location";


function Course(props) {
    const onChangeAction = () => {
        props.history.replace('/course/location')
    }
    return (
        <div className={'pdg-1'}>
            <div className={'pdg-modal-content'}>
                <Header />
                <div className="pdg-modal-body">
                    <h2>Find Tutors, Trainers &amp; Institutes near you.</h2>
                    <div className="clearfix search-form">
                        <div className="form-group">
                            <input type="text" name="" onChange={onChangeAction} placeholder="Enter categories e.g. Maths, Java, French" value="" />
                            <i className=" pyt-search-24"></i>
                        </div>
                        <ul className="dropdown-list list-unstyled">
                            <li>test 1</li>
                            <li>test 2</li>
                            <li>test 3</li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
export default withLastLocation(Course);