import React, { Fragment } from 'react';
import { withLastLocation } from 'react-router-last-location';

function NotFound({
    history
}) {
    return (
        <Fragment>
            <div className="shadow-overlay"></div>
            <div className="error-content">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>404 Error.</h1>
                            <p>
                                Oooooops! Looks like nothing was found at this location.
                                Maybe try on of the links below, click on the top menu
                                or try a search?
                            </p>
                            <button onClick={() => history.push('/')} className="btn error-btn">Back to home</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default withLastLocation(NotFound);