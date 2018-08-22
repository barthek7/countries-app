import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/index';
import DevTools from './tools/DevTools';
import {getCountries} from './actions/actions';

ReactDOM.render(
<Provider store={store}>
<div>
    <DevTools />
    <h1>STH</h1>
</div>
</Provider>,
 document.getElementById('root')
);
store.dispatch(getCountries());
