import React from 'react';
import { withLastLocation } from "react-router-last-location";
import { removeClass } from '../../../../helper/utils/removeClass';
const closeModal = (props) => {
    removeClass('TAG', 'body', 'show-modal');
    removeClass('CLASS', 'bg-overlay', 'pdg-overlay');
    setTimeout(() => {
        props.history.push('/');
    }, 200);
}
function Header(props) {
    return (
        <div className="pdg-modal-header">
            <span className="pdg-close" onClick={() => closeModal(props)}>Close</span>
        </div>
    )
}
export default withLastLocation(Header);