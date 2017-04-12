#!/usr/bin/env node
require('../server.babel'); // babel registration (runtime transpilation for node)
var path = require('path');
var rootDir = path.resolve(__dirname, '..');
// 以下为测试cluster内容
var cluster = require('cluster');
var numCPUs = require('os').cpus().length;
/**
 * Define isomorphic constants.
 */
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
}
else {
  global.__CLIENT__ = false;
  global.__SERVER__ = true;
  global.__DISABLE_SSR__ = false;  // <----- DISABLES SERVER SIDE RENDERING FOR ERROR DEBUGGING
  global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';

  if (__DEVELOPMENT__) {
    if (!require('piping')({
        hook: true,
        ignore: /(\/\.|~$|\.json|\.scss$)/i
      })) {
      return;
    }
  }

  // https://github.com/halt-hammerzeit/webpack-isomorphic-tools
  var WebpackIsomorphicTools = require('webpack-isomorphic-tools');
  global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('../webpack/webpack-isomorphic-tools'))
    // .development(__DEVELOPMENT__)    https://github.com/halt-hammerzeit/webpack-isomorphic-tools/issues/114 该方法已过时
    .server(rootDir, function () {
      require('../src/server');
    });
}
