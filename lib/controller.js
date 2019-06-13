const { Responder} = require('adapt-authoring-core');
const path = require('path');

module.exports = {
  serveIndex: function(req, res, next) {
    new Responder(res).html().success({}, { filepath: path.join(__dirname, '../views/index') });
  }
};
