import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import ReduxThunk from 'redux-thunk';
import { createBrowserHistory, createMemoryHistory } from 'history';
import appReducer from './reducers/appReducer';
import isServer from '../helper/utils/isServer';
import { retrocycle } from '../helper/utils/jsonHelper';

/**
 * Combining different application level reducers and router reducer to create a single point of reducer object
 * router reducer will dispatch on every route change this will trigger segment script to track page visits
 * @param {HistoryObject} history - browserHisory/MemoryHistory Object to track routing in client side
 */
const createRootReducer = history =>
    combineReducers({
        app: appReducer,
        router: connectRouter(history)
    });

/**
 * creating a redux store from reducer, initialStore Object and middlewares
 * @param {string} url - initial url for used for SSR requests
 */
function configureStore(url = '/') {
    // Create a history depending on the environment
    /**
     * Browser history will not be available in server(SSR), So we need to pass alternate/temp history object
     * BrowserHistory - available only in the browser and this needs DOM access. So it can only be used in browser side scripts
     * MemoryHistory - The best thing about memory location is that we can use it anywhere that we can run JavaScript(like NodeJS).
     * MemoryHistory will have the same keys that is available in BrowserHistory but it does not need DOM/Browser obj
     */
    const history = isServer()
        ? createMemoryHistory({
            initialEntries: [url]
        })
        : createBrowserHistory();

    //  enable REDUX_DEVTOOLS_EXTENSION if it is available in browser
    const composeEnhancer =
        !isServer() && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            : compose;

    const composedEnhancers = composeEnhancer(
        applyMiddleware(ReduxThunk, routerMiddleware(history))
    );
    // Do we have preloaded state available? Great, save it.
    // Added retrocycle which will replace refs with the actual object in case any Circular JSON handled in decycle
    const initialState = !isServer() ? retrocycle(window.REDUX_STATE) : {};
    // Initialize store object
    const store = createStore(
        createRootReducer(history),
        initialState,
        composedEnhancers
    );
    //delete REDUX_STATE from window object once it is used
    if (!isServer()) {
        delete window.REDUX_STATE;
    }

    return {
        store,
        history
    };
}

export const { store, history } = configureStore();
export default configureStore;
