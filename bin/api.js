#!/usr/bin/env node

// 以下为测试cluster内容
var cluster = require('cluster');
var numCPUs = require('os').cpus().length;
if (process.env.isOpenCluster === '1' && cluster.isMaster) {
  console.log("master start...");

  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('listening', function (worker, address) {
    console.log('listening: worker ' + worker.process.pid + ', Address: ' + address.address + ":" + address.port);
  });

  cluster.on('exit', function (worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died');
  });
} else {
  if (process.env.NODE_ENV !== 'production') {
    if (!require('piping')({
        hook: true,
        ignore: /(\/\.|~$|\.json$)/i
      })) {
      return;
    }
  }
  require('../server.babel'); // babel registration (runtime transpilation for node)
  require('../api/api');
}
