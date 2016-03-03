import expect from 'expect';

const binarySearch = (arr, value, lo = 0, hi = arr.length - 1) => {
  const mid = Math.floor((hi + lo) / 2);

  if (arr[mid] === value) {
    return mid;
  }

  if (value < arr[mid]) {
    return binarySearch(arr, value, lo, mid - 1);
  }

  return binarySearch(arr, value, mid + 1, hi);
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

expect(binarySearch(arr, 1)).toEqual(0);
expect(binarySearch(arr, 5)).toEqual(4);
expect(binarySearch(arr, 10)).toEqual(9);
