/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let visited = Array.from({ length: grid.length}, () => 
        Array.from({ length: grid[0].length}).fill(false)
    );
    let numOfIsland = -1;
    let isLandArea = [];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (!visited[i][j]) {
                let area = dfs(i, j , 0);
                if(area > 0){
                    numOfIsland++;
                    isLandArea[numOfIsland] = area;
                }
            }
        }
    }

    function dfs(m ,n, count) {
        if (m < 0 || m >= grid.length || n < 0 || n >= grid[0].length || visited[m][n] || grid[m][n] === 0) {
            return 0;
        }

        visited[m][n] = true;
        count = 1 + dfs(m-1 ,n, count) + dfs(m+1 ,n, count) + dfs(m ,n-1, count) + dfs(m ,n+1, count);

        return count;
    }

		console.log(isLandArea);

    return numOfIsland > -1 ? Math.max(...isLandArea) : 0;
};