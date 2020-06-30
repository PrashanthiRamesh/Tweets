import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import Main from './components/Main'
import reducer from './reducers'
import rootSaga from './sagas'


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}


