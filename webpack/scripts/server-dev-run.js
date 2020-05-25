const { nodeServerPort } = require('../../src/share/pro-config');
console.log('zzz')
require('./free-port').freePortOnUnixLike(nodeServerPort);
require('../../dist/server/app.js');
