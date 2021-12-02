import Kata from './kata';

describe('execute()', () => {
  it('should return true', () => {
    const kata = new Kata();
    expect(kata.execute()).toBe(true);
  });
});
