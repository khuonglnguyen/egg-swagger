exports.keys = 'csxiaoyao';

// egg-swagger-doc 配置信息
exports.swaggerdoc = {
  dirScanner: './app/controller',
  apiInfo: {
    title: 'egg-swagger',
    description: 'swagger-ui for egg',
    version: '1.0.0',
  },
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  securityDefinitions: {
    // apikey: {
    //   type: 'apiKey',
    //   name: 'clientkey',
    //   in: 'header',
    // },
    // oauth2: {
    //   type: 'oauth2',
    //   tokenUrl: 'http://petstore.swagger.io/oauth/dialog',
    //   flow: 'password',
    //   scopes: {
    //     'write:access_token': 'write access_token',
    //     'read:access_token': 'read access_token',
    //   },
    // },
  },
  enableSecurity: false,
  // enableValidate: true,
  routerMap: false,
  enable: true,
}