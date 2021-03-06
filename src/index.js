import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './redux/store'
import './assets/style/main.css';
import 'flowbite'

ReactDom.render(
<Provider store={store} >
    <App/>
</Provider>

, document.getElementById('root'))
