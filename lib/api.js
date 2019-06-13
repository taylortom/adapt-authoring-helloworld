const controller = require('./controller');

module.exports = {
  name: 'helloworld',
  routes: [
    {
      route: '/',
      handlers: { get: controller.serveIndex }
    }
  ]
};
