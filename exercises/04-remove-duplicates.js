/**
 * Exercise 4: Remove Duplicates from Sorted Array (LeetCode 26)
 * Pattern: Two Pointers (Fast & Slow Runner)
 * Lesson Reference: Lesson 2 (Simulation 3)
 * 
 * Problem:
 * Given an integer array `nums` sorted in non-decreasing order, remove the duplicates
 * in-place such that each unique element appears only once. The relative order of the
 * elements should be kept the same.
 * 
 * Then return the number of unique elements `k` in `nums`.
 * 
 * Consider the number of unique elements of nums to be k.
 * The first k elements of nums should hold the final result.
 * It does not matter what you leave beyond the first k elements.
 * 
 * Requirements:
 * - Time Complexity: O(N)
 * - Space Complexity: O(1) auxiliary memory (MUST be in-place, do not allocate new array)
 * 
 * Example 1:
 *   Input: nums = [1, 1, 2]
 *   Output: k = 2, nums = [1, 2, _]
 * 
 * Example 2:
 *   Input: nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
 *   Output: k = 5, nums = [0, 1, 2, 3, 4, _, _, _, _, _]
 */

export function removeDuplicates(nums) {
  // Edge case: empty array
  if (nums.length === 0) return 0;

  // TODO:
  // 1. Maintain a `slow` pointer starting at index 0 (points to the last confirmed unique element).
  // 2. Iterate a `fast` pointer from index 1 to nums.length - 1:
  //    - If nums[fast] !== nums[slow]:
  //        - We encountered a new unique value!
  //        - Increment slow
  //        - Copy nums[fast] into nums[slow]
  // 3. Return slow + 1 (which represents the count of unique elements)

  return 0;
}
