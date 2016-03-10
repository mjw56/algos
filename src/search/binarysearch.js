/**
 * Binary Search Algorithm
 *
 * Worst case performance  O(log n)
 * Best case performance O(1)
 * Average case performance  O(log n)
 * Worst case space complexity O(1)
 */

 /**
 * Finds the index of a value in an array
 *
 * @param {array} arr
 * @param {number} value
 * @param {?number} lo
 * @param {?number} hi
 * @returns {number}
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
