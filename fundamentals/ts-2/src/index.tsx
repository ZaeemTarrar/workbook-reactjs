import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware, Store } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import './styles/index.css'
import App from './App'

import reportWebVitals from './reportWebVitals'

import reducer from './store/reducers/reducer'

import { T_StoreState } from './contracts/StoreState'
import { T_ActionResponse } from './contracts/ActionResponse'
import { T_DispatchMethod } from './contracts/DispatchMethod'

const store: Store<T_StoreState, T_ActionResponse> & {
  dispatch: T_DispatchMethod
} = createStore(reducer, applyMiddleware(thunk))

const rootElement = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
