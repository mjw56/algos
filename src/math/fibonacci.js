import expect from 'expect';

export default function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

expect(fibonacci(12))
  .toEqual(233);
