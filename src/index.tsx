import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware, compose} from 'redux';
import reduceBoroughs from './reducers';
import App from './App';
import thunk from 'redux-thunk';

// this is a bit hacky - not sure how to cast (<any>window) without JSX getting upset

const middleware = [thunk]


const store = createStore(
    reduceBoroughs,
    compose(applyMiddleware(...middleware),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
