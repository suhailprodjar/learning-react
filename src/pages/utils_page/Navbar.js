import React, { useEffect, useState } from 'react';
import { withLastLocation } from 'react-router-last-location';

const triggerButtonAction = (history, path) => {
    history.replace(path);
}
function NavBar(props) {
    const { history } = props;
    const [enable, setSticky] = useState(false);
    const handleScroll = (e) => {
        if (e.currentTarget.scrollY > 45) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    return (
        <header className={`is_mobile_fixed ${enable ? 'fixed' : ''}`}>
            <div className="container">
                <div className="row vertical-center">
                    <div className="col-12 col-sm-7">
                        <a href="/" className="logo">LearnGrow</a>
                    </div>
                    <div className="col-12 col-sm-5 is_mobile text-right">
                        <button className="btn active"
                            onClick={() => triggerButtonAction(history, '/learner/course')}>
                            Student Register
                        </button>
                        <button className="btn"
                            onClick={() => triggerButtonAction(history, '/register-trainer')}>
                            Trainer Register
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default withLastLocation(NavBar);