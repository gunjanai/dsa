/**
 * Exercise 3: Valid Palindrome (LeetCode 125)
 * Pattern: Two Pointers (Converging from Boundaries)
 * Lesson Reference: Lesson 2 (Simulation 2)
 * 
 * Problem:
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
 * and removing all non-alphanumeric characters, it reads the same forward and backward.
 * Alphanumeric characters include letters and numbers.
 * 
 * Given a string `s`, return true if it is a palindrome, or false otherwise.
 * 
 * Requirements:
 * - Time Complexity: O(N)
 * - Space Complexity: O(1) auxiliary memory (avoid creating full reversed strings)
 * 
 * Example 1:
 *   Input: s = "A man, a plan, a canal: Panama"
 *   Output: true
 *   Explanation: "amanaplanacanalpanama" is a palindrome.
 * 
 * Example 2:
 *   Input: s = "race a car"
 *   Output: false
 *   Explanation: "raceacar" is not a palindrome.
 * 
 * Example 3:
 *   Input: s = " "
 *   Output: true
 *   Explanation: s is an empty string "" after removing non-alphanumerics, which reads same both ways.
 */

export function isPalindrome(s) {
  // Helper to check if a character code is alphanumeric [a-z, A-Z, 0-9]
  function isAlphaNumeric(char) {
    const code = char.charCodeAt(0);
    return (
      (code >= 48 && code <= 57) ||  // 0-9
      (code >= 65 && code <= 90) ||  // A-Z
      (code >= 97 && code <= 122)    // a-z
    );
  }

  // TODO:
  // 1. Initialize `left = 0` and `right = s.length - 1`
  // 2. While left < right:
  //    - If s[left] is not alphanumeric, skip it (left++)
  //    - If s[right] is not alphanumeric, skip it (right--)
  //    - If both are alphanumeric:
  //        - Compare s[left].toLowerCase() with s[right].toLowerCase()
  //        - If they don't match, return false
  //        - If they match, advance both pointers (left++, right--)
  // 3. Return true

  return false;
}
