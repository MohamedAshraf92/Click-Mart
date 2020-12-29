import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './store/reducers/rootReducer'

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const saveToLocalStorage = (state) => {
  try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
  } catch (err) {
      console.log(err)
  }
}

const loadFromLocalStorage = () => {
  try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) {
          return undefined;
      }
      return JSON.parse(serializedState);
  } catch (err) {
      console.log(err)
      return undefined;
  }
}

const persistedState = loadFromLocalStorage()

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
)

store.subscribe(() => saveToLocalStorage(store.getState()))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
