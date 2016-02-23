import ReactDOM from 'react-dom'
import React from "react"
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'

import App from 'js/app'
import placeholderStore from 'js/reducers/placeholderStore'

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <div>
        <App />
        {dev}
      </div>
    </Provider>,
    document.getElementById("target")
  )
};

const reducer = combineReducers({
  placeholderStore,
});

const store = (window.devToolsExtension && window._DEV_MODE ? window.devToolsExtension()(createStore) : createStore)(reducer);

render();