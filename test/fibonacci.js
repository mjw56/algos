import expect from 'expect';
import fibonacci from '../src/math/fibonacci';

describe('fibonacci algo', () => {
  it('should properly compute fibonacci', () => {
    expect(fibonacci(12)).toEqual(233);
  });
});
