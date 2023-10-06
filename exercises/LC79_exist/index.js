function exist(board, word) {
	const m = board.length;
	const n = board[0].length;
	const visited = Array.from({length: m}, () => Array.from({length: n}).fill(false));

	for (let i = 0; i < m; i ++) {
		for (let j = 0; j < n; j++) {
			if (word[0] === board[i][j] && search(i, j, 0)) {
				return true;
			}
		}
	}

	return false;

	function search(i, j, index) {
		if (index === word.length) return true;

		if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j] || board[i][j] !== word[index]) {
			return false;
		}


		visited[i][j] = true;
		if (
			search(i + 1, j, index + 1) || search(i - 1, j, index + 1) ||
			search(i, j + 1, index + 1) || search(i, j - 1, index + 1)
		) {
			return true;
		}

		visited[i][j] = false;
		return false;
	}
}

module.exports = exist;
