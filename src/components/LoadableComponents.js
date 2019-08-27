import React from 'react';
import Loadable from 'react-loadable';
//import Loader from './../common_components/Loader';

/**
 * Async components
 */

// Home page loadable component
export const HomeLoadable = Loadable({
    loader: () => import(/* webpackChunkName: "home-page" */ './../pages/home'),
    loading: () => <div>Loading</div>
});