/**
 * Exercise 2: Squaring a Sorted Array (LeetCode 977)
 * Pattern: Two Pointers (Converging / Two Ends Inward)
 * Lesson Reference: Lesson 2 (Simulation 1)
 * 
 * Problem:
 * Given an integer array `nums` sorted in non-decreasing order, return an array
 * of the squares of each number sorted in non-decreasing order.
 * 
 * Requirements:
 * - Time Complexity: O(N)
 * - Space Complexity: O(N) for the returned output array
 * - Note: Squaring then sorting with .sort() is O(N log N) and does NOT fulfill the O(N) requirement.
 * 
 * Example 1:
 *   Input: nums = [-4, -1, 0, 3, 10]
 *   Output: [0, 1, 9, 16, 100]
 *   Explanation: After squaring: [16, 1, 0, 9, 100]. After sorting: [0, 1, 9, 16, 100].
 * 
 * Example 2:
 *   Input: nums = [-7, -3, 2, 3, 11]
 *   Output: [4, 9, 9, 49, 121]
 */

export function sortedSquares(nums) {
  // TODO:
  // 1. Allocate a result array of same length: new Array(nums.length)
  // 2. Place `left = 0` and `right = nums.length - 1`
  // 3. Keep a `writeIdx = nums.length - 1` (fill from largest to smallest)
  // 4. Compare Math.abs(nums[left]) with Math.abs(nums[right]):
  //    - If left's magnitude is larger, square it, place at result[writeIdx], left++
  //    - Otherwise, square right, place at result[writeIdx], right--
  // 5. Decrement writeIdx and repeat until left > right
  // 6. Return result

  return [];
}
