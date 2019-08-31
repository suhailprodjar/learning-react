import React, { Component } from 'react';
import { withLastLocation } from "react-router-last-location";
import withStorage from '../../../../components/Storage';
import { connect } from 'react-redux';
import { addClass } from '../../../../helper/utils/addClass';

class DetailInstitute extends Component {
    componentDidMount() {
        // if (!this.props.code) {
        //     this.props.history.replace('/register-institute')
        // }
        setTimeout(() => {
            addClass('TAG', 'body', 'show-modal');
        }, 200)
    }
    render() {
        return <div>Details Institute</div>
    }
}

export default withLastLocation(
    withStorage(connect(null, null)(DetailInstitute))
);;