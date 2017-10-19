'use strict'
import React from 'react'
import ReactDom from 'react-dom';
//import {render} from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Routes from './Routes'

ReactDom.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('main')
);
