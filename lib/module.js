const { Module, Responder} = require('adapt-authoring-core');
const path = require('path');

/**
* An example authoring tool plugin. Exposes a 'helloworld' API route.
* @extends {Module}
*/
class HelloWorld extends Module {
  /**
  * Creates the custom router
  * @param {App} app App instance
  * @param {Function} resolve Function to call on fulfilment
  * @param {Function} reject Function to call on rejection
  */
  preload(app, resolve, reject) {
    app.getModule('server').root.createChildRouter('helloworld')._router.get('/', this.handleIndex);
    resolve();
  }
  /**
  * Renders the index page
  * @param {ClientRequest} req The client request object
  * @param {ServerResponse} res The server response object
  * @param {function} next The next middleware function in the stack
  */
  handleIndex(req, res, next) {
    new Responder(res).html().success({}, { filepath: path.join(__dirname, '../views/index') });
  }
}

module.exports = HelloWorld;
