// Initializes the `Automovel` service on path `/automovel`
const { Automovel } = require('./automovel.class');
const createModel = require('../../models/automovel.model');
const hooks = require('./automovel.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/automovel', new Automovel(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('automovel');

  service.hooks(hooks);
};
