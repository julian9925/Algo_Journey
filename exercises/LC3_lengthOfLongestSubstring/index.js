// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {
	let windowHashMap = {};
	let windowStart = 0;
	let maxLength = 0;
	let maxNonRepeatedSubstring = "";

	for (let i = 0; i < s.length; i++) {
		const endChar = s[i];

		if (windowHashMap[endChar] >= windowStart) {
			windowStart = windowHashMap[endChar] + 1;
		}

		windowHashMap[endChar] = i;
		const currentLength = i - windowStart + 1;
		if (currentLength > maxLength) {
			maxNonRepeatedSubstring = s.slice(windowStart, windowStart + currentLength);
			maxLength = currentLength;
		}
	}
	console.info(maxNonRepeatedSubstring);
	return maxLength;
}


module.exports = lengthOfLongestSubstring;