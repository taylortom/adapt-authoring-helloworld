const Module = require('adapt-authoring-core').DataTypes.Module;

class HelloWorld extends Module {
  bootDelegate(resolve, reject) {
    const server = this.app.server;
    if(!server) {
      console.warn(`${this.name}: Cannot initialise, server isn't running`);
      resolve();
    }
    server.createRouter('helloworld')
      .use((req, res, next) => {
        console.log('Hello world middleware');
        next();
      })
      .get('/', (req, res) => res.send('Hello World!'))

    resolve();
  }
}

module.exports = HelloWorld;
