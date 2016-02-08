import ReactDOM from 'react-dom'
import React from "react"
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'


import App from 'js/app'
import placeholderStore from 'js/reducers/placeholderStore'


const reducer = combineReducers({
  placeholderStore
});

const store = createStore(reducer);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("target")
  )
};

render();