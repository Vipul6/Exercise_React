import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import combineReducer from './reducers/index'
import { rootSaga } from './sagas/saga.js'
import createSagaMiddleware from 'redux-saga'
import ReactDOM from 'react-dom'
import '../css/bootstrap.css'
import '../css/app.less'
import Quiz from './container/quiz'
import Header from './components/common/header'
import { API_URL } from './constants/constants'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(combineReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
const App = () => (
    <div>
        <Header/>
        <Provider store={ store }>
          <Quiz/>
        </Provider>
   </div>
)
ReactDOM.render(
      <App/>
    , document.getElementById('container')
)
