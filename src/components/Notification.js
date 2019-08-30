import React from 'react';
import { connect } from 'react-redux';
function Notification({
    messageText = '',
    notificationHandler
}) {
    if (messageText) {
        setTimeout(() => {
            notificationHandler()
        }, 5000)
    }
    return (
        <div className={`alert-info blue ${messageText ? 'show' : ''}`}>
            <p>
                <i className="pyt-tickmark-16"></i>
                <span>Info</span>
                {messageText}
            </p>
            <i className=" pyt-close-16"></i>
        </div>
    )
}

function mapStateToProps({ app = {} }) {
    const { messageText = '' } = app;
    return {
        messageText
    };
}

const mapDispatchToProps = dispatch => {
    return {
        notificationHandler : () => {
            dispatch({
                type: 'NOTIFICATION',
                payload: {
                    messageText: ''
                }
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);