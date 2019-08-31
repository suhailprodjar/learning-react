import React, { Component } from 'react';
import { withLastLocation } from "react-router-last-location";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import withStorage from '../../../../components/Storage';

class DetailTrainer extends Component {
    componentDidMount() {
        if (!this.props.tutorCode) {
            this.props.history.replace('/register-trainer')
        }
    }
    render() {
        return <div>Details Trainer</div>
    }
}

function mapStateToProps({ app = {} }) {
    const { tutorCode = '', name } = app;
    return {
        tutorCode,
        name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        triggerTutorRegister: bindActionCreators(
            () => {},
            dispatch
        )
    };
};

export default withLastLocation(
    withStorage(connect(mapStateToProps, mapDispatchToProps)(DetailTrainer))
);