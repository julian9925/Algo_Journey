function isPalindrome(s) {
    let chars = s.toLowerCase().replace(/[\W_]/g, "");
    let left = 0;
    let right = chars.length - 1;

    while(left < right) {
        if (chars[left] !== chars[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("love"));

module.exports = isPalindrome;