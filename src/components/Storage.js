import React from 'react';
/**
 * Higher Order Component for local storage
 * @param {*} WrappedComponent
 */
const withStorage = WrappedComponent => {
    class HOC extends React.Component {
        state = {
            localStorageAvailable: false
        };

        componentDidMount() {
            this.checkLocalStorageExists();
        }

        checkLocalStorageExists() {
            const testKey = 'test';

            try {
                localStorage.setItem(testKey, testKey);
                localStorage.removeItem(testKey);
                this.setState({ localStorageAvailable: true });
            } catch (e) {
                this.setState({ localStorageAvailable: false });
            }
        }
        /**
         * Load the data from local storage
         */
        getFromStorage = key => {
            if (this.state.localStorageAvailable) {
                return JSON.parse(localStorage.getItem(key));
            }
            return null;
        };

        /**
         * Store the data to local storage
         */
        setToStorage = (key, data) => {
            if (this.state.localStorageAvailable) {
                localStorage.setItem(key, data);
            }
        };

        /**
         * Remove the data from local storage
         */
        removeFromStorage = key => {
            if (this.state.localStorageAvailable) {
                localStorage.removeItem(key);
            }
        };

        render() {
            return (
                <WrappedComponent
                    getFromStorage={this.getFromStorage}
                    setToStorage={this.setToStorage}
                    removeFromStorage={this.removeFromStorage}
                    {...this.props}
                />
            );
        }
    }

    return HOC;
};

export default withStorage;