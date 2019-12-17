var generateParenthesis = function(n) {
	let res = [];
	ParenthesisDFS(n, n, '', res);
	return res;
};

function ParenthesisDFS(left, right, generateString, result) {
	if (left > right) {
		return 
	}
	if (left === 0 && right === 0) {
		return result.push(generateString);
	}
	else {
		if (left > 0)  {
			ParenthesisDFS(left - 1, right, generateString + '(', result);
		}
		if (right > 0) { 
			ParenthesisDFS(left, right - 1, generateString + ')', result);
		}
	}
}

module.exports = generateParenthesis;