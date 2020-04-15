import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import sectionsReducer from './App/Store/sectionsReducer';
import topMenuDataReducer from './App/Store/topMenuDataReducer';
import modalReducer from './App/Store/modalReducer';
import filtersReducer from './App/Store/filtersReducer';

import axios from 'axios';

const reducer = combineReducers({
    sections: sectionsReducer,
    topMenu: topMenuDataReducer,
    modals: modalReducer,
    filters: filtersReducer
})

const store = createStore(reducer);

// axios.defaults.baseURL = "https://jsx-games.firebaseio.com/";

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();