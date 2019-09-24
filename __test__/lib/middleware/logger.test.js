const getLogger = require('../../../lib/middleware/logger');

const logger = getLogger('Test logger');

describe('logger', () => {
  it('logs requests', () => {
    const timestamp = new Date();
    const testRequest = { path: '/test', method: 'GET', requestTime: timestamp };
    let output = '';
    console['log'] = (...messages) => output = messages.join(' ');
    logger(testRequest, null, () => {
      expect(output).toBe(`Test logger /test GET ${timestamp}`);
    });
  });
});