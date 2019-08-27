import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { ConnectedRouter } from 'connected-react-router';
import { store, history } from './redux/configureStore';
import { LastLocationProvider } from 'react-router-last-location';
import { HelmetProvider } from 'react-helmet-async';
import Loadable from 'react-loadable';
import isServer from './helper/utils/isServer';

const AppBundle = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <LastLocationProvider>
                <HelmetProvider>
                    <App />
                </HelmetProvider>
            </LastLocationProvider>
        </ConnectedRouter>
    </Provider>
);

Loadable.preloadReady().then(() => {
    isServer()
        ? ReactDOM.hydrate(AppBundle, document.getElementById('root'))
        : ReactDOM.render(AppBundle, document.getElementById('root'));
});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
