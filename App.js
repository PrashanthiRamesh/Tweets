import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import Main from './components/Main'

import reducer from './reducers';
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(rootSaga)

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}


