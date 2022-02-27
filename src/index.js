import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Layout from './pages/layout'
import Table from './pages/table'
import NoPage from './pages/NoPage'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../src/store/store'

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.scss';

ReactDOM.render(
  <><React.StrictMode>

  </React.StrictMode><BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="table" element={<Table />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </PersistGate>
      </Provider>
    </BrowserRouter></>,
  document.getElementById('root')
);
