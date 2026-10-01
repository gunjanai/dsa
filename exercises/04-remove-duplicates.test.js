import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { removeDuplicates } from './04-remove-duplicates.js';

describe('Exercise 4: Remove Duplicates from Sorted Array', () => {
  test('Standard array with repeated elements', () => {
    const nums = [1, 1, 2];
    const k = removeDuplicates(nums);
    assert.equal(k, 2);
    assert.deepEqual(nums.slice(0, k), [1, 2]);
  });

  test('Array with multiple consecutive duplicates', () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const k = removeDuplicates(nums);
    assert.equal(k, 5);
    assert.deepEqual(nums.slice(0, k), [0, 1, 2, 3, 4]);
  });

  test('Array with all identical elements', () => {
    const nums = [7, 7, 7, 7, 7];
    const k = removeDuplicates(nums);
    assert.equal(k, 1);
    assert.deepEqual(nums.slice(0, k), [7]);
  });

  test('Array already unique', () => {
    const nums = [1, 2, 3, 4, 5];
    const k = removeDuplicates(nums);
    assert.equal(k, 5);
    assert.deepEqual(nums.slice(0, k), [1, 2, 3, 4, 5]);
  });

  test('Single element array', () => {
    const nums = [42];
    const k = removeDuplicates(nums);
    assert.equal(k, 1);
    assert.deepEqual(nums.slice(0, k), [42]);
  });

  test('Empty array', () => {
    const nums = [];
    const k = removeDuplicates(nums);
    assert.equal(k, 0);
    assert.deepEqual(nums, []);
  });
});
