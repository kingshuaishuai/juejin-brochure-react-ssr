const {exec} = require('child_process');

const freePortOnUnixLike = port => {
  if (!process.platform || process.platform === 'win32') {
    return ;
  }
  const searchProgramCmd = `lsof -i :${port}`;

  exec(searchProgramCmd, (error, stdout, stderr) => {
    if (error) {
      // throw error;
    }

    const outputLines = stdout.split('\n');

    outputLines.filter(outputLine => {
      const line = outputLine.trim();
      const columns = line.split(/\s+/);
      const pid = columns[1];
      if (pid !== undefined && pid.toUpperCase() !== 'PID') {
        const killProgramCmd = `kill -9 ${columns[1]}`;
        exec(killProgramCmd, (error, stdout, stderr) => {
          if (error) {
            console.error(`端口${port}释放失败`);
            // 如果使用了throw 由于是回调函数，无法捕获到异常，因而使用filter并返回错误，便于以后捕获错误
            return error;
          }
          console.log(`端口${port}已释放`);
        })
      }
    })
  })
}

module.exports = {
  freePortOnUnixLike
}