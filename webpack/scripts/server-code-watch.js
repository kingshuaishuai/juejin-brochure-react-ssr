const webpack = require('webpack');
const config = require('../webpack.server.config');
const constantCode = require('./constant');

const compiler = webpack(config);

compiler.watch({
  aggregateTimeout: 300,
  ignored: /node_modules/,
  poll: 2000,
  'info-verbosity': 'verbose',
}, (err, stats) => {
  let json = stats.toString('minimal');

  if (json.errors) {
    json.errors.forEach(error => {
      console.error(error);
    })
  }

  if (json.warnings) {
    json.warnings.forEach(warning => {
      console.log(warning);
    })
  }

  // 监听进程打印SERVER_CODE_COMPLETED触发进程中对控制台标准输出的监听，从而启动程序
  console.log(constantCode.SERVER_CODE_COMPLETED);
})

compiler.hooks.done.tap('done', data => {
  console.log('server code done');
})

process.stdin.on('data', data => {
  if (data.toString() === 'exit') {
    process.exit();
  }
})