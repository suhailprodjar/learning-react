import React, { Component } from 'react';
import { withLastLocation } from "react-router-last-location";
import withStorage from '../../../../components/Storage';
import { connect } from 'react-redux';
import { addClass } from '../../../../helper/utils/addClass';

class InstituteTrainer extends Component {
    componentDidMount() {
        setTimeout(() => {
            addClass('TAG', 'body', 'show-modal');
        }, 200)
    }
    render() {
        return <div>Institute Trainer</div>
    }
}

export default withLastLocation(
    withStorage(connect(null, null)(InstituteTrainer))
);;