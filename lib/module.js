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
    app.getModule('server').createRouter('/helloworld').get('/', this.handleIndex);
    resolve();
  }

  handleIndex(req, res, next) {
    res.render(path.join(__dirname, '../views/index'));
  }
}

module.exports = HelloWorld;
