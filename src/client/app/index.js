import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../router/index';
import routeList from '../router/route-config';

ReactDom.hydrate(
  <BrowserRouter>
    <App routeList={routeList} />
  </BrowserRouter>,
  document.getElementById('root')
);