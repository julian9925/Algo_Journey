/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
	const orderMap = new Map();
	for (let i = 0; i < order.length; i++) {
		orderMap.set(order[i], i);
	}

	for (let i = 0; i < words.length - 1; i++) {
		const firstWord = words[i];
		const secondWord = words[i + 1];

		for (let j = 0; j < firstWord.length; j++) {
			if (j == secondWord.length) return false;
			
			if (firstWord[j] !== secondWord[j]) {
				const firstWordOrder = orderMap.get(firstWord[j]) || -1;
				const secondWordOrder = orderMap.get(secondWord[j]) || -1;
				if (firstWordOrder > secondWordOrder) {
					return false;
				}
				break;
			}
		}
	}

	return true;
};

console.log(isAlienSorted(["aa","a"]
, "abqwertyuioplkjhgfdszxcvnm"
));