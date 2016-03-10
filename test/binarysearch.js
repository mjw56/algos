import expect from 'expect';
import binarySearch from '../src/search/binarysearch';

describe('binary search algo', () => {
  it('should return the index of the value to be found', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(binarySearch(arr, 1)).toEqual(0);
  });

  it('should return -1 if passed an empty array', () => {
    expect(binarySearch([], 10)).toEqual(-1);
  });

  it('should return -1 if value was not found', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    expect(binarySearch(arr, 0)).toEqual(-1);
  });
});
