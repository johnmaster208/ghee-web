import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {registerObserver} from 'react-perf-devtool'
import App from './App'
import store from './components/store/configureStore'
import '../styles/app.less'

registerObserver()

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,document.querySelector('#app')
);