const timestamper = require('../../../lib/middleware/timestamper');

describe('timestamper', () => {
  it('Adds timestamps to passed in requests', () => {
    const testRequest = {};
    timestamper(testRequest, null, () => {
      expect(testRequest).toHaveProperty('requestTime');
    });
  });
});
