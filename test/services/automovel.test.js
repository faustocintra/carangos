const assert = require('assert');
const app = require('../../src/app');

describe('\'Automovel\' service', () => {
  it('registered the service', () => {
    const service = app.service('automovel');

    assert.ok(service, 'Registered the service');
  });
});
