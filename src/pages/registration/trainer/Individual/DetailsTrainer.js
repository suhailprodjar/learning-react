import React, { Component } from 'react';
import { withLastLocation } from "react-router-last-location";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import withStorage from '../../../../components/Storage';
import { addClass } from '../../../../helper/utils/addClass';

class DetailTrainer extends Component {
    componentDidMount() {
        // if (!this.props.code) {
        //     this.props.history.replace('/register-trainer')
        // }
        setTimeout(() => {
            addClass('TAG', 'body', 'show-modal');
        }, 200)
    }
    render() {
        return <div>Details Trainer</div>
    }
}

function mapStateToProps({ app = {} }) {
    const { code = '', name } = app;
    return {
        code,
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