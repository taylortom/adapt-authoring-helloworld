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
  /**
  * Renders the index page
  * @param {ClientRequest} req The client request object
  * @param {ServerResponse} res The server response object
  * @param {function} next The next middleware function in the stack
  */
  handleIndex(req, res, next) {
    res.render(path.join(__dirname, '../views/index'));
  }
}

module.exports = HelloWorld;
