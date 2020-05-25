const { nodeServerPort } = require('../../src/share/pro-config');
require('./free-port').freePortOnUnixLike(nodeServerPort);
require('../../dist/server/app.js');
