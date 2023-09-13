var cloneGraph = function(node) {
	if (!node) return null;
	
	const map = new Map();
	const queue = [node];
	const clone = new Node(node.val);
	map.set(node, clone);

	while (queue.length) {
		const curr = queue.shift();
		for (let neighbor of curr.neighbors) {
			if (!map.has(neighbor)) {
				map.set(neighbor, new Node(neighbor.val));
				queue.push(neighbor);
			}
			map.get(curr).neighbors.push(map.get(neighbor));
		}
	}

	return clone;
};