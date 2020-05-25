const { spawn } = require('child_process');
const path = require('path');
const constantCode = require('./constant');

const nodeServerPath = path.resolve(__dirname, './server-dev-run.js');
const feCodeWatchProcess = spawn('npm', ['run', 'fe:watch'], {stdio: 'inherit'});
const serverCodeWatchProcess = spawn('npm', ['run', 'server:watch']);

let nodeServerProcess = null;

const onServerData = data => {
  let dataStr = data.toString();
  if (dataStr.indexOf(constantCode.SERVER_CODE_COMPLETED) > -1) {
    nodeServerStart();
  } else {
    console.log(dataStr);
  }
}

function nodeServerStart() {
  nodeServerProcess && nodeServerProcess.kill();
  nodeServerProcess = spawn('node', [nodeServerPath]);
  nodeServerProcess.stdout.on('data', onServerData)
}

serverCodeWatchProcess.stdout.on('data', onServerData);

function killAllProcesses() {
  feCodeWatchProcess && feCodeWatchProcess.kill();
  serverCodeWatchProcess && serverCodeWatchProcess.kill();
  nodeServerProcess && nodeServerProcess.kill();
}

process.on('close', code => {
  console.log('main process close', code);
});

process.on('exit', code => {
  console.log('main process exit', code);
});

// SIGINT: 监听unix平台 ctrl + c事件
process.on('SIGINT', () => {
  serverCodeWatchProcess.stdin.write('exit', () => {
    console.log('server is exiting...');
  })
  killAllProcesses();
})