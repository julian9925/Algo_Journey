function isAnagram(s, t) {
	if (s.length !== t.length) {
		return false;
	}

	let sHashMap = {};
	let sChars = s.split("");
	let tChars = t.split("");
	let isAnagram = true;

	sChars.forEach((value) => {
		if (!sHashMap[value]) {
			sHashMap[value] = 0;
		}
		sHashMap[value]++;
	});
	
	tChars.forEach((value) => {
		if (!sHashMap[value]) {
			isAnagram = false;
		}
	});

	return isAnagram;
}

module.exports = isAnagram;
