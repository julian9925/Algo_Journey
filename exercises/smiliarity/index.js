/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
var areSentencesSimilarTwo = function(sentence1, sentence2, similarPairs) {
    if (sentence1.length !== sentence2.length) {
        return false;
    }

    let hash = {}
	for (let i = 0; i < similarPairs.length; i++) {
		if (!hash[similarPairs[i][0]]) {
			hash[similarPairs[i][0]] = [similarPairs[i][1]];
		} else {
			hash[similarPairs[i][0]].push(similarPairs[i][1]);
		}
		if (!hash[similarPairs[i][1]]) {
			hash[similarPairs[i][1]] = [similarPairs[i][0]];
		} else {
			hash[similarPairs[i][1]].push(similarPairs[i][0]);
		}
	}


	for (let i = 0; i < sentence1.length; i++) {
        let visited = [];
		if (sentence1[i] !== sentence2[i]) {
			if (!hash[sentence1[i]]) {
				return false;
			} else {
                let stack = [...hash[sentence1[i]]];
				
				while(stack.length > 0) {
					let found = false;
                    const node = stack.pop();

                    if (visited.indexOf(node) != -1) {
                        continue;
                    }

					visited.push(node);

					if (node === sentence2[i]) {
						found = true;
					} else {
						if (hash[node]) {
							stack.push(...hash[node]);
						}
					}
                }

				if (!found) {
					return false;
				}
			}
		}
	}

	return true;
};