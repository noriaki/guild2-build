import { sum } from '~/sum';

describe('sum function', () => {
  it('1+1=2', () => {
    expect(sum(1, 1)).toBe(2);
  });
});
