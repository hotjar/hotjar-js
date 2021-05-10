import Hotjar from '../src/index';

describe('Hotjar library', () => {
  it('should return methods', () => {
    expect(Hotjar.init).toBeDefined();
    expect(Hotjar.isReady).toBeDefined();
  });
});
