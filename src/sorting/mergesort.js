import expect from 'expect';

/**
 * Merge Sort Algorithm
 *
 * Worst case performance O(n log n)
 * Best case performance O(n log n) typical, O(n) natural variant
 * Average case performance  O(n log n)
 * Worst case space complexity О(n) total, O(n) auxiliary
 */

/**
 * Merges two arrays into
 * single sorted array
 *
 * @param {array} left
 * @param {array} right
 * @returns {array} sorted
 */
function merge(left, right) {
  const result = [];
  let il = 0;
  let ir = 0;

  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il++]);
    } else {
      result.push(right[ir++]);
    }
  }

  return result.concat(left.slice(il)).concat(right.slice(ir));
}

/**
 * Recursively splits an unsorted array
 * and recursively calls merge to sort
 *
 * @param {array} arr
 * @returns {array} sorted
 */
export default function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

const arr = [2, 10, 9, 3, 1, 7, 6, 4, 8, 5];

expect(mergeSort(arr))
  .toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
