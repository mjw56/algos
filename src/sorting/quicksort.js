/**
 * Quicksort Algorithm
 *
 * The in-place version of quicksort has a space complexity of O(log n),
 * even in the worst case, when it is carefully implemented using the
 * following strategies: in-place partitioning is used. This unstable
 * partition requires O(1) space.
 *
 * Time Complexity:
 *
 * Best: O(n log(n))
 * Average: O(n log(n))
 * Worst: O(n^2)
 */

/**
 * Partitions an array on the pivot
 *
 * @param {array} arr
 * @param {number} lo
 * @param {number} hi
 * @returns {number} partition
 */
function partition(arr, lo, hi) {
  const pivot = arr[Math.floor((hi + lo) / 2)];
  let i = lo;
  let j = hi;

  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }

    while (arr[j] > pivot) {
      j--;
    }

    if (i <= j) {
      // swap
      [arr[i], arr[j]] = [arr[j], arr[i]];

      // continue
      i++;
      j--;
    }
  }

  return i;
}

/**
 * Sorts an arry in ascending order
 *
 * @param {array} arr
 * @param {?number} lo
 * @param {?number} hi
 * @returns {array}
 */
export default function quicksort(arr, lo = 0, hi = arr.length - 1) {
  if (arr.length) {
    const index = partition(arr, lo, hi);

    if (lo < index - 1) {
      quicksort(arr, lo, index - 1);
    }

    if (index < hi) {
      quicksort(arr, index, hi);
    }
  }

  return arr;
}
