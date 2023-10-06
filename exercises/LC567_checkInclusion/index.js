/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function checkInclusion(s1, s2) {
	if (s1.length === 0) return false;
  if (s2.length < s1.length) return false;

  const charCount = {};

  for (const char of s1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

	for (let i = 0; i <= s2.length - s1.length; i++) {
	  const subString = s2.slice(i, i + s1.length);
	  if (isPermutation(subString)) {
		  return true;
	  }
	}
  
	return false;
  
	function isPermutation(subString) {
    const tempCharCount = { ...charCount };
  
	  for (let i = 0; i < subString.length; i++) {
      if (!tempCharCount[subString[i]]) {
        return false;
      }

      tempCharCount[subString[i]]--;
      console.log(tempCharCount);
      
      if (tempCharCount[subString[i]] < 0) {
        return false;
      }
	  }

    return true;
	}
}

module.exports = checkInclusion;