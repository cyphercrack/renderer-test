import rendererTest from '../../src/renderer-test.js';

describe('rendererTest', () => {
  it('should be runing without any problems', () => {
    expect(rendererTest).to.not.throw();
  });
});
