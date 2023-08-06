function groupAnagrams(strs: string[]) {
	let stringSortedMaps: {
		[key in string]: string[]
	} = {};

	strs.forEach((item) => {
		const sortedItem = item.split('').sort().join('');
		if (sortedItem in stringSortedMaps) {
			stringSortedMaps[sortedItem].push(item);
		}

		else {
			stringSortedMaps[sortedItem] = [item];
		}
	});

	const res = Object.values(stringSortedMaps);
	return res;
}

module.exports = groupAnagrams;