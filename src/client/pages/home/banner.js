import React from 'react';
import { withLastLocation } from 'react-router-last-location';

const triggerButtonAction = (history, path) => {
    history.replace(path);
}

function  BanerHeader(props) {
    const { history } = props;
    return (
        <div className="banner-header">
            <div className="container">
                <div className="row vertical-center">
                    <div className="col-12 col-sm-7">
                        <a href="" className="logo">LearnGrow</a>
                    </div>
                    <div className="col-12 col-sm-5 is_mobile">
                        <button className="btn active" onClick={() => triggerButtonAction(history, '/register-learner')}>
                            Student Register
                        </button>
                        <button className="btn" onClick={() => triggerButtonAction(history, '/register-trainer')}>
                            Trainer Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function BannerContent() {
    return (
        <div className="banner-content">
            <div className="container">
                <div className="row vertical-center">
                    <div className="col-12 col-sm-6">
                        <h1>
                            <span>{`Find Tutors, Trainers & Institutes near you.`}</span>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </h1>

                        <div className="search-bar">
                            <input
                                name=""
                                type="text"
                                placeholder="Enter categories e.g. Maths, Java, French"
                            />
                            <i className="pyt-search-16"></i>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6">
                        <span
                            className="banner-img"
                            style={{'backgroundImage': 'url(https://i.imgur.com/YfKXMaV.png)'}}
                        ></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
function HomeBanner(props) {
    return (
        <div className="hero-banner">
            <BanerHeader {...props}/>
            <BannerContent />
        </div>
    )
}

export default withLastLocation(HomeBanner);