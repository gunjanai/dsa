/**
 * Exercise 1: Pair with Target Sum (Two Sum II - Input Array Is Sorted)
 * Pattern: Two Pointers (Converging)
 * Lesson Reference: Lesson 1
 * 
 * Problem:
 * Given a 0-indexed array of integers `nums` that is already sorted in non-decreasing order,
 * find two numbers such that they add up to a specific `target` number.
 * 
 * Return the indices of the two numbers [index1, index2] as an array.
 * If no such pair exists, return [-1, -1].
 * 
 * Requirements:
 * - Time Complexity: O(N)
 * - Space Complexity: O(1) auxiliary memory
 * 
 * Example 1:
 *   Input: nums = [1, 2, 4, 6, 8, 10, 13], target = 14
 *   Output: [2, 5] (nums[2] + nums[5] = 4 + 10 = 14)
 * 
 * Example 2:
 *   Input: nums = [2, 7, 11, 15], target = 9
 *   Output: [0, 1]
 * 
 * Example 3:
 *   Input: nums = [1, 2, 3], target = 10
 *   Output: [-1, -1]
 */

export function pairWithTargetSum(nums, target) {
  // TODO: Initialize left pointer at the beginning and right pointer at the end.
  // While left < right:
  //   1. Calculate current sum
  //   2. If current sum equals target, return [left, right]
  //   3. If current sum < target, advance left pointer
  //   4. If current sum > target, decrement right pointer
  // If loop exits without match, return [-1, -1]

  return [-1, -1];
}
