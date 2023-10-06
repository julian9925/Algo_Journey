/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
	let state = new Array(graph.length).fill(0); // 0 = unvisited, 1 = visiting, 2 = visited
    let safe = new Array(graph.length).fill(false);
    
	function dfs(node) {
		if (state[node] === 1) {
			return false;
		}

		if (state[node] === 2) {
			return safe[node];
		}

		state[node] = 1;

		for (let i = 0; i < graph[node].length; i++) {
			if (!dfs(graph[node][i])) {
				return false;
			}
		}

		state[node] = 2;
		safe[node] = true;
		return true;
	}

	for (let i = 0; i < graph.length; i++) {
		dfs(i);
	}

	let res = [];
	for (let i = 0; i < safe.length; i++) {
		if (safe[i]) {
			res.push(i);
		}
	}

	return res;
};

eventualSafeNodes([[1,2],[2,3],[5],[0],[5],[],[]]);

module.exports = eventualSafeNodes;