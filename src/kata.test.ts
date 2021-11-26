import Kata from './kata';

describe('runTests()', () => {
  it('should return true', () => {
    const kata = new Kata();
    expect(kata.runTests()).toBe(true);
  });
});
