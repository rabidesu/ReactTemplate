import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import  configureStore  from './store/configureStore'
import App from './containers/App.js'
import './styles/app.less'

const store = configureStore();


render(
    <Provider store={store}>
        <div className='app'>
            <App />
        </div>
    </Provider>,
    document.getElementById('root')
)

