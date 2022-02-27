import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Home from './pages/home';
import { Provider } from 'react-redux'
import { store } from '../src/store/store'

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.scss';

ReactDOM.render(
  <><React.StrictMode>

  </React.StrictMode><BrowserRouter>
      <Provider store={store}>
        <Home />
      </Provider>
    </BrowserRouter></>,
  document.getElementById('root')
);
