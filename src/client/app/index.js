import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../router/index';
import routeList from '../router/route-config';
import matchRoute from '../../share/match-route';

function clientRender() {
  let initialData =JSON.parse( document.getElementById('ssrTextInitData').value);

  let { targetRoute } = matchRoute(document.location.pathname, routeList);

  targetRoute.initialData = initialData;

  ReactDom.hydrate(
    <BrowserRouter>
      <App routeList={routeList} />
    </BrowserRouter>,
    document.getElementById('root')
  );
}

clientRender();