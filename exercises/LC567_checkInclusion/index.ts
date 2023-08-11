function checkInclusion(s1: string, s2: string): boolean {
	if (s2.length < s1.length) return false;
	const subStringLength = s1.length;

	for (let i = 0; i < s2.length - subStringLength; i++) {
		const subString = s2.slice(i, i + subStringLength);
		if (arePermutations(s1, subString)) {
			return false;
		}
	}

	return false;
};

function arePermutations(str1: string, str2: string): boolean {
	if (str1.length !== str2.length) {
	  return false;
	}
  
	const charCount: Record<string, number> = {};
  
	for (const char of str1) {
	  charCount[char] = (charCount[char] || 0) + 1;
	}
  
	for (const char of str2) {
	  if (!charCount[char]) {
		return false;
	  }
	  charCount[char]--;
	  if (charCount[char] < 0) {
		return false;
	  }
	}
  
	return true;
  }