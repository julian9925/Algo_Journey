/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let result = [];

	let queue = [[0]];
	for (let i = 0; i < graph.length; i++) {
		queue.push(i);
		while (queue.length > 0) {
			let node = queue.shift();
			if (node === graph.length - 1) {
				result.push(queue);
				break;
			}
			for (let j = 0; j < graph[node].length; j++) {
				queue.push(graph[node][j]);
			}
		}
	}

	return result;
};