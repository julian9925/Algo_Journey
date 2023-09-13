/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let visited = Array.from({ length: grid.length},
		() => Array.from({ length: grid[0].length}).fill(false));

	let numOfFreshOranges = 0;

	for (let i = 0; i < grid.length; i++) {
		for(let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === 1) {
				numOfFreshOranges++;
			}
		}
	}

	let numOfMinutes = 0;

	while (numOfFreshOranges > 0) {
		let numOfRottenOranges = 0;

		for (let i = 0; i < grid.length; i++) {
			for(let j = 0; j < grid[0].length; j++) {
				if (grid[i][j] === 2 && !visited[i][j]) {
					dfs(i, j);
					numOfRottenOranges++;
				}
			}
		}

		if (numOfRottenOranges === 0) {
			return -1;
		}

		numOfMinutes++;
	}

	function dfs(m, n) {
		if (m < 0 || m >= grid.length || n < 0 || n > grid[0].length || visited[i][j] || grid[i][j] === 0) {
			return;
		}

		if (grid[m][n] === 1) {
			grid[m][n] = 2;
			numOfFreshOranges--;
		}

		visited[m][n] = true;

		dfs(m - 1, n);
		dfs(m + 1, n);
		dfs(m, n - 1);
		dfs(m, n + 1);
	}

	return numOfMinutes;
};