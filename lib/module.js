const Api = require('adapt-authoring-api');
const apiDef = require('./api');

/**
* An example authoring tool plugin. Exposes a 'helloworld' API route.
* @extends {Module}
*/
class HelloWorld extends Api {
  /** @override */
  static get def() {
    return apiDef;
  }
}

module.exports = HelloWorld;
