import expect from 'expect';
import mergeSort from '../src/sorting/mergesort';

describe('merge sort', () => {
  it('should properly compute sort using merge sort', () => {
    const arr = [2, 10, 9, 3, 1, 7, 6, 4, 8, 5];

    expect(mergeSort(arr))
      .toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
