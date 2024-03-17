/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let newStr = str.toLowerCase().trim() .replace(/[^a-zA-Z0-9]/g, "");
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] != newStr[newStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
