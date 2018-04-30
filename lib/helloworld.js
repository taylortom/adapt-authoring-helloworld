const Module = require('adapt-authoring-core').DataTypes.Module;

class HelloWorld extends Module {
  bootDelegate(resolve, reject) {
    console.log(this.app);
    resolve();
  }
}

module.exports = HelloWorld;
