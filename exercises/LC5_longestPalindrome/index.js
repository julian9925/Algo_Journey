//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

class longestPalindrome {
    constructor() {
        this.startIndex = 0;
        this.maxLength = 0;
    }

    expandAroundMiddle(s, left, right) {
        while ( left >= 0 && right < s.length && s[left] === s[right]) {
            const currentPalLengh = right - left + 1;
            if (currentPalLengh > maxLength) {
                this.maxLength = currentPalLengh;
                this.startIndex = left;
            }
            left--;
            right++;
        }
    }

    palindrome(s) {
        for (let index = 0; index < s.length; index++) {
            expandAroundMiddle(s, index - 1, index + 1);
            expandAroundMiddle(s, index, index + 1);
        }
    
        return s.slice(this.startIndex, this.startIndex + this.maxLength);
    }
}

let test = new longestPalindrome();
module.exports = test.palindrome;
