import expect from 'expect';

function partition(arr, lo, hi) {
  let pivot = arr[Math.floor((hi + lo) / 2)],
      i = lo,
      j = hi;

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

expect(
  quicksort([5,2,1,8,3,9,0,4,7,6])
).toEqual([0,1,2,3,4,5,6,7,8,9])