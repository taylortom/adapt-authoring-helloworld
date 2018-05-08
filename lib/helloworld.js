const Module = require('adapt-authoring-core').DataTypes.Module;

class HelloWorld extends Module {
  preload(app, resolve, reject) {
    if(!app.server) {
      console.warn(`${this.name}: Cannot initialise, server isn't running`);
      resolve();
    }
    this.server = app.server;

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
