import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, GenericStoreEnhancer } from 'redux';
import reduceBoroughs from './reducers';
import App from './App';
import thunk from 'redux-thunk';

// this is a bit hacky - not sure how to cast (<any>window) without JSX getting upset

declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION__: Function; }
}

/*
const devToolsExtension: GenericStoreEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ ?
    window.__REDUX_DEVTOOLS_EXTENSION__() : f => f;
*/

const middleware = [thunk];

const store = createStore(
    reduceBoroughs,
    compose(applyMiddleware(...middleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) as GenericStoreEnhancer
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
