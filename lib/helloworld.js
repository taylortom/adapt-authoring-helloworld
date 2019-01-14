const {Module} = require('adapt-authoring-core');

/**
* An example authoring tool plugin. Exposes a 'helloworld' API route.
*/
class HelloWorld extends Module {
  /**
  * Creates the custom router
  */
  preload(app, resolve, reject) {
    const server = app.getModule('adapt-authoring-server');
    if(!server) {
      console.warn(`${this.name}: Cannot initialise, server isn't running`);
      resolve();
    }
    /**
    * Instance of the Express server
    * @type {Server}
    */
    this.server = server;

    this.server.createRouter('/helloworld')
      .use((req, res, next) => {
        console.log('Hello world middleware');
        next();
      })
      .get('/', (req, res) => res.send('Hello World!'));

    resolve();
  }
}

module.exports = HelloWorld;
