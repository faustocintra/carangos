const automovel = require('./automovel/automovel.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(automovel);
};
