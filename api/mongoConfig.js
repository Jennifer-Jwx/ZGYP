/**
 * Created by lyj on 2016/4/23.
 */
console.log('mongodb_uri');
console.log(process.env.MONGOHQ_URL);
module.exports = {
  uri: process.env.MONGOHQ_URL,//  || process.env.MONGOLAB_URI || 'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || '127.0.0.1') + '/goeasy'
  options: {
    user: 'react',
    pass: 'react'
  },
  // Enable mongoose debug mode
  debug: process.env.MONGODB_DEBUG || false
}
