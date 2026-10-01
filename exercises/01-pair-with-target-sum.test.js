import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { pairWithTargetSum } from './01-pair-with-target-sum.js';

describe('Exercise 1: Pair with Target Sum', () => {
  test('Finds pair in standard sorted array', () => {
    const nums = [1, 2, 4, 6, 8, 10, 13];
    const target = 14;
    assert.deepEqual(pairWithTargetSum(nums, target), [2, 5]);
  });

  test('Finds pair at the extreme ends', () => {
    const nums = [2, 7, 11, 15];
    const target = 17;
    assert.deepEqual(pairWithTargetSum(nums, target), [0, 3]);
  });

  test('Finds adjacent pair at beginning', () => {
    const nums = [2, 3, 4];
    const target = 5;
    assert.deepEqual(pairWithTargetSum(nums, target), [0, 1]);
  });

  test('Handles negative numbers in sorted array', () => {
    const nums = [-10, -5, -2, 0, 3, 7];
    const target = -2;
    assert.deepEqual(pairWithTargetSum(nums, target), [1, 4]); // -5 + 3 = -2
  });

  test('Returns [-1, -1] when no pair exists', () => {
    const nums = [1, 2, 3, 9];
    const target = 8;
    assert.deepEqual(pairWithTargetSum(nums, target), [-1, -1]);
  });

  test('Returns [-1, -1] for empty or single element array', () => {
    assert.deepEqual(pairWithTargetSum([], 5), [-1, -1]);
    assert.deepEqual(pairWithTargetSum([5], 5), [-1, -1]);
  });
});
