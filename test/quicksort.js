import expect from 'expect';
import quicksort from '../src/sorting/quicksort';

describe('quicksort algo', () => {
  it('should properly sort using quick sort', () => {
    expect(
      quicksort([5, 2, 1, 8, 3, 9, 0, 4, 7, 6])
    ).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

    expect(
      quicksort([])
    ).toEqual([]);
  });
});
