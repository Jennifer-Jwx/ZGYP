require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[ process.env.NODE_ENV || 'development' ];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  wcfUrl: process.env.WCFURL,
  system: process.env.SYSTEM,
  admin: process.env.ADMIN,
  adminPassword: process.env.ADMIN_PWD,
  app: {
    title: '中国艺品网',
    description: '中国艺品网', // 工艺品定制、工艺品、大师作品、艺品体验、保真艺品
    head: {
      title: '中国艺品网',
      // titleTemplate: '艺品网:%s',
      meta: [
        { name: 'description', content: '艺品网' },
        { charset: 'utf-8' }
      ]
    }
  },

}, environment);
