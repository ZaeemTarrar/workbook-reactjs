import React from 'react'
import ReactDOM from 'react-dom'

import './styles/index.css'
import App from './App'

import reportWebVitals from './reportWebVitals'

import { Provider } from 'react-redux'
import { Store } from './store/index'

const Main: JSX.Element = (
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
)

const RootRef: HTMLElement | null = document.getElementById('root')

ReactDOM.render(Main, RootRef)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
