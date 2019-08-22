import React, { Component, Fragment } from 'react';
import Content from './content/content';

export default class LandingComponent extends Component {
    render() {
        return (
            <div className="content-wrap">
                <Content/>
            </div>
        )
    }
}