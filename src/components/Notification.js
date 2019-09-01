import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import triggerNotification from '../redux/actions/triggerNotification';
function Notification({
    messageText = '',
    notificationHandler,
    isIdle,
    buttonText,
    buttonAction
}) {
    if (messageText) {
        if (!isIdle) {
            setTimeout(() => {
                notificationHandler()
            }, 5000)
        }
    }
    return (
        <div className={`notification-bar ${messageText ? 'in' : ''}`}>
            <div className="notification-content">
                <p>{messageText}</p>
                <button className="btn" onClick={
                    () => {
                        notificationHandler({});
                        if (buttonAction) {
                            buttonAction();
                        }
                    }
                }>{buttonText || 'Close'}</button>
            </div>
        </div>
    )
}

function mapStateToProps({ app = {} }) {
    const { notification = {} } = app;
    const { messageText = '', isIdle = false, buttonText = null, buttonAction = null } = notification;
    return {
        messageText,
        isIdle,
        buttonText,
        buttonAction
    };
}

const mapDispatchToProps = dispatch => {
    return {
        notificationHandler: bindActionCreators(triggerNotification, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);