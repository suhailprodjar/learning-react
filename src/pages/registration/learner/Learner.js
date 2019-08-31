import React, { useReducer, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import PDGState from './PDGState';
import { PDGContext } from './PDGContext';
import Course from './components/Course';
import Location from './components/Location';
import CourseType from './components/CourseType';
import Register from './components/Register';
import Progress from './components/Progress';
import Helmet from './components/Helmet';

const initialData = {
    activeIndex: 1
};
/**
 * Default PDG Modal
 * Normal itierary(Costed || Frozen) handled here
 */
function Learner() {
    useEffect(() => {
        setTimeout(() => {
            document.getElementsByTagName('body')[0].classList.add('show-modal')
            document.getElementsByClassName('bg-overlay')[0].classList.add('pdg-overlay')
        }, 200)
    }, []);
    return (
        <PDGContext.Provider value={useReducer(PDGState, initialData)}>
            <div className={'pdg-modal'}>
                <Progress />
                <Helmet />
                <Switch>
                    <Route path="/learner/course"
                        exact={true}
                        component={Course}
                    />
                    <Route path="/learner/course/location"
                        exact={true}
                        component={Location}
                    />
                    <Route path="/learner/course/location/type"
                        exact={true}
                        component={CourseType}
                    />
                    <Route path="/learner/register"
                        exact={true}
                        component={Register}
                    />
                </Switch>
            </div>
        </PDGContext.Provider>
    );
}

export default Learner;
