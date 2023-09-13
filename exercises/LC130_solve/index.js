/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
	let visited = Array.from({ length: board.length}, () => 
		Array.from({ length: board[0].length}).fill(false)
	);

	for (let i = 0; i < board.length; i++) {
		if (board[i][0] === 'O') dfs(i, 0);
		if (board[i][board[0].length - 1] === 'O') dfs(i, board[0].length - 1);
	}

	for (let j = 0; j < board[0].length; j++) {
		if (board[0][j] === 'O') dfs(0, j);
		if (board[board.length - 1][j] === 'O') dfs(board.length - 1, j);
	}

	function dfs(m, n) {
		if (m < 0 || m >= board.length || n < 0 || n >= board[0].length || visited[m][n] || board[m][n] === 'X') {
            return false;
        }

		visited[m][n] = true;
		board[m][n] = '#';
		

		dfs(m - 1, n);
		dfs(m + 1, n);
		dfs(m, n - 1);
		dfs(m, n + 1);
	}

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			if (board[i][j] === 'O') {
				board[i][j] = 'X'
			}
			if (board[i][j] === '#') {
				board[i][j] = 'O'
			}
		}
	}
};