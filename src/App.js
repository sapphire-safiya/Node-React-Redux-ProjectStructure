import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import routes from './routes'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

//Import a reducer that will be used to createStore
import { reducer } from './reducers'


// Have client use the initial state defined by the server
// Use Thunk middleware

const initialState = window.__INITIAL_STATE__
const store = createStore(reducer, initialState, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    { routes }
  </Provider>, document.getElementById('main')
)

