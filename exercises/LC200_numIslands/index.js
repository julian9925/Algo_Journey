function numIslands(grid) {
	let numOfIslands = 0;
    let visited = Array.from({ length: grid.length}, () => 
    	Array.from({ length: grid[0].length}).fill(false)
	);

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (!visited[i][j] && dfs(i, j)) {
				numOfIslands++;
			}
		}
	}

    function dfs(m ,n) {
		if (m < 0 || m >= grid.length || n < 0 || n >= grid[0].length || visited[m][n] || grid[m][n] === '0') {
			return false;
		}

		visited[m][n] = true;

		dfs(m - 1, n);
		dfs(m + 1, n);
		dfs(m, n - 1);
		dfs(m, n + 1);

		return true;
    }

	return numOfIslands;
}

module.exports = numIslands;
