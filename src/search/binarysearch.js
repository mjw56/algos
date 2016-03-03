import expect from 'expect';

/**
 *
 * Binary Search Algorithm
 *
 * Worst case performance  O(log n)
 * Best case performance O(1)
 * Average case performance  O(log n)
 * Worst case space complexity O(1)
 *
 */

export default function binarySearch(arr, value, lo = 0, hi = arr.length - 1) {
  if (hi < lo) {
    return -1;
  }

  const mid = Math.floor((hi + lo) / 2);

  if (!arr || !arr.length) {
    return -1;
  }

  if (arr[mid] === value) {
    return mid;
  }

  if (value < arr[mid]) {
    return binarySearch(arr, value, lo, mid - 1);
  }

  return binarySearch(arr, value, mid + 1, hi);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

expect(binarySearch(arr, 1)).toEqual(0);
expect(binarySearch(arr, 5)).toEqual(4);
expect(binarySearch(arr, 10)).toEqual(9);
expect(binarySearch([], 10)).toEqual(-1);
expect(binarySearch(arr, 12)).toEqual(-1);
expect(binarySearch(arr, 0)).toEqual(-1);
