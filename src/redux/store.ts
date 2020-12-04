import { createStore, applyMiddleware, compose } from 'redux'

import thunkMiddleware from 'redux-thunk'
import { rootReducer } from './rootReducer'

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

// @ts-ignore
window.__store__ = store

export default store
