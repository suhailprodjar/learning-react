import React from 'react';
import HomeBanner from './banner';
import HowToWorks from './works';

function HomePage() {
    return (
        <div className={'home'}>
            <HomeBanner />
            <HowToWorks />
        </div>
    )
}

export default HomePage;