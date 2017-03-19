import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import ReduxThunk from 'redux-thunk';

import Header from './Header';
import AppFeatures from './AppFeatures';
import Download from './Download';

import styles from './styles/app.scss';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className={styles.app}>
                    <Header />
                    <AppFeatures />
                    <Download />
                </div>
            </Provider>
        );
    }
}
