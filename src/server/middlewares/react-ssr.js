import React from 'react';
import Index from '../../client/pages/index';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router'
import App from '../../client/router/index';
import routeList from '../../client/router/route-config';

export default (ctx, next) => {
  const path = ctx.request.path;
  const html = renderToString(
    <StaticRouter location={path}>
      <App routeList={routeList}></App>
    </StaticRouter>
  );
  ctx.body = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>my react ssr</title>
    </head>
    <body>
      <div id="root">${html}</div>
    </body>
    </html>
    <script type="text/javascript"  src="index.js"></script>`
  return next();
}