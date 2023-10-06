/**
 * @param {number[][]} isConnected
 * @return {number}
 * Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
 * Output: 2
 */


var findCircleNum = function(isConnected) {
    let adjacentList = {};
	let visited = [];

	for (let i = 0; i < isConnected.length; i++) {
		adjacentList[i] = [];
		for (let j = 0; j < isConnected[i].length; j++) {
			if (isConnected[i][j] === 1) {
				adjacentList[i].push(j);
			}
		}
	}

	function dfs(node, visited, adjacentList) {
		if (visited.indexOf(node) != -1) {
			return;
		}

		visited.push(node);

		if (adjacentList[node]) {
			for (let i = 0; i < adjacentList[node].length; i++) {
				dfs(adjacentList[node][i], visited, adjacentList);
			}
		}
	}

	let count = 0;
	for (let i = 0; i < isConnected.length; i++) {
		if (visited.indexOf(node) === -1) {
			dfs(i, visited, adjacentList);
			count++;
		}
	}

	return count;
};