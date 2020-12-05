import { createStore, applyMiddleware, compose } from 'redux'

import thunkMiddleware from 'redux-thunk'
import { rootReducer } from './rootReducer'

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never // Check object Properties type and returns it
export type InferActionTypes<
  T extends { [key: string]: (...arg: any[]) => any }
> = ReturnType<PropertiesTypes<T>>

// @ts-ignore
window.__store__ = store

export default store
