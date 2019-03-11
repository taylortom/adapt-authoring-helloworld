const {Module} = require('adapt-authoring-core');
const path = require('path');

/**
* An example authoring tool plugin. Exposes a 'helloworld' API route.
*/
class HelloWorld extends Module {
  /**
  * Creates the custom router
  */
  preload(app, resolve, reject) {
    const server = app.server;

    server.createRouter('/helloworld')
      .use((req, res, next) => {
        this.log('info', 'middleware');
        next();
      })
      .get('/', (req, res, next) => res.render(path.join(__dirname, '../views/index'), {}));

    resolve();
  }
}

module.exports = HelloWorld;
