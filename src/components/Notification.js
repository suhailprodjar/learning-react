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
        <div className={`notification-bar ${messageText ? 'in' : ''}`}>
            <div className="notification-content">
                <p>{messageText}</p>
                <button className="btn">Close</button>
            </div>
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