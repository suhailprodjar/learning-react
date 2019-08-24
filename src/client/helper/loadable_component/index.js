import React from 'react';
import Loadable from 'react-loadable';
import HomePage from '../../pages/HomePage';

// Login page loadable component
export const LoginLoadable = Loadable({
    loader: () => import(/* webpackChunkName: "home-page" */ '../../pages/HomePage'),
    loading: () => <HomePage />
});