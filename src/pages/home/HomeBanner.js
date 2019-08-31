import React from 'react';
import { withLastLocation } from 'react-router-last-location';
function HomeBanner(props) {
    return (
        <div className="hero-banner">
            <div className="banner-content">
                <div className="container">
                    <div className="row vertical-center">
                        <div className="col-12 col-sm-6">
                            <h1>
                                <span>{`Find Tutors, Trainers & Institutes near you.`}</span>
                                {`Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry.`}
                            </h1>

                            <div className="search-bar">
                                <input
                                    name=""
                                    type="text"
                                    onClick={(e) => {
                                        e && e.preventDefault();
                                        props.history.push('/learner/course')
                                    }}
                                    placeholder="Enter categories e.g. React, Java, French, Dance"
                                />
                                <i className="pyt-search-16"></i>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <span
                                className="banner-img"
                                style={{ backgroundImage: "url('https://i.imgur.com/YfKXMaV.png')" }}
                            ></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withLastLocation(HomeBanner);