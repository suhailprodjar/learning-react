import React from 'react';
import { connect } from 'react-redux';
function Notification({
    notification = ''
}) {
    return (
        <div className="alert-info blue show">
            <p>
                <i className="pyt-tickmark-16"></i>
                <span>Info</span>
                {notification}
            </p>
            <i className=" pyt-close-16"></i>
        </div>
    )
}

function mapStateToProps({ app = {} }) {
    const { notification = '' } = app;
    return {
        notification
    };
}

export default connect(mapStateToProps, null)(Notification);