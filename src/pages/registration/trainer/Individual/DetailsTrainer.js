import React, { Component } from 'react';
import { withLastLocation } from "react-router-last-location";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class DetailTrainer extends Component {

    render() {
        return <div>Details Trainer</div>
    }
}

function mapStateToProps({ app = {} }) {
    const { tutorCode = '' } = app;
    return {
        tutorCode,
        name:
    };
}

const mapDispatchToProps = dispatch => {
    return {
        triggerTutorRegister: bindActionCreators(
            triggerTutorRegister,
            dispatch
        )
    };
};

export default withLastLocation(
    connect(mapStateToProps, mapDispatchToProps)(DetailTrainer)
);