import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { sortedSquares } from './02-squaring-sorted-array.js';

describe('Exercise 2: Squaring a Sorted Array', () => {
  test('Standard mixed negative and positive array', () => {
    assert.deepEqual(sortedSquares([-4, -1, 0, 3, 10]), [0, 1, 9, 16, 100]);
  });

  test('Array with duplicates after squaring', () => {
    assert.deepEqual(sortedSquares([-7, -3, 2, 3, 11]), [4, 9, 9, 49, 121]);
  });

  test('All negative numbers', () => {
    assert.deepEqual(sortedSquares([-5, -4, -3, -2, -1]), [1, 4, 9, 16, 25]);
  });

  test('All positive numbers', () => {
    assert.deepEqual(sortedSquares([1, 2, 3, 4, 5]), [1, 4, 9, 16, 25]);
  });

  test('Single element array', () => {
    assert.deepEqual(sortedSquares([-3]), [9]);
    assert.deepEqual(sortedSquares([0]), [0]);
  });

  test('Empty array', () => {
    assert.deepEqual(sortedSquares([]), []);
  });
});
