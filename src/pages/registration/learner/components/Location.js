import React from 'react';
import Header from './Header';
import Footer from './Footer';
function Location() {
    return (
        <div className={'pdg-1'}>
            <div className={'pdg-modal-content'}>
                <Header />
                <div className="pdg-modal-body">
                  <h2>What is your location?</h2>
                    <div className="clearfix search-form">
                      <div className="form-group">
                        <input type="text" name="" placeholder="Enter categories e.g. Maths, Java, French" value="Sai Homes, Manapakkam"/>
                        <i className=" pyt-search-24"></i>
                      </div>
                      <p className="location-txt">
                        <i className="pyt-location-16"></i>
                        <span className="bold">Location</span>
                        {`Sai Homes, Krishna Nagar Periyar Rd, Indira Nagar, Manapakkam,
                        Chennai, Tamil Nadu 600125`}
                      </p>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
export default Location;