import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { isPalindrome } from './03-valid-palindrome.js';

describe('Exercise 3: Valid Palindrome', () => {
  test('Standard sentence with spaces and punctuation', () => {
    assert.equal(isPalindrome("A man, a plan, a canal: Panama"), true);
  });

  test('Non-palindrome string', () => {
    assert.equal(isPalindrome("race a car"), false);
  });

  test('Whitespace only string', () => {
    assert.equal(isPalindrome("   "), true);
  });

  test('Punctuation only string', () => {
    assert.equal(isPalindrome(".,:;!?-"), true);
  });

  test('Palindrome with alphanumeric numbers', () => {
    assert.equal(isPalindrome("0P0"), true);
    assert.equal(isPalindrome("0P"), false);
    assert.equal(isPalindrome("1a2 2a1"), true);
  });

  test('Single character string', () => {
    assert.equal(isPalindrome("a"), true);
    assert.equal(isPalindrome("Z"), true);
  });
});
