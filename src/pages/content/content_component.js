import React, { Component, Fragment } from 'react';
import Brand from './brand_component';
import AboutUS from './aboutus_component';
import Benefits from './benefits_component';
import OurWork from './our_work_component';

export default class Content extends Component {

    handleClickAction = () => {
        const element = document.body;
        const menuElement = document.getElementsByClassName('hamburger-icon');
        menuElement[0].className = 'hamburger-icon';
        element.className = "";
    }
    render() {
        return (
            <Fragment>
                <div className="content-wrap">
                    <div className="home">
                        <Brand />
                        <AboutUS />
                        <OurWork />
                        <Benefits />
                    </div>
                    <div className="bg-overlay" onClick={this.handleClickAction}></div>
                </div>
            </Fragment>
        )
    }
}