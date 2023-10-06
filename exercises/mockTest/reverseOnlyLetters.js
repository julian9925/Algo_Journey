/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
	const letters = Array.from(s).filter(c => /[a-zA-Z]/.test(c));
    
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (/[a-zA-Z]/.test(s[i])) {
            result += letters.pop();
        } else {
            result += s[i];
        }
    }

    return result;
};