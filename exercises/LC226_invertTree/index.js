function invertTree(root) {
	if (!root) return null
	let stack = [root];

	while (stack.length) {
		let node = stack.pop();
		if (node) {
			[node.left, node.right] = [node.right, node.left];
			stack.push(node.left, node.right);
		}

	}

	return root;
}


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth (root) {
    if (!root) return null
	let stack = [[root, 1]];
    let depth = 0;

	while (stack.length) {
		let [node, currentDepth] = stack.pop();
		if (node) {
			depth = Math.max(depth, currentDepth);

			if (node.left) {
				stack.push([node.left, currentDepth + 1]);
			}
			if (node.right) {
				stack.push([node.right, currentDepth + 1]);
			}
		}
	}

	return depth;
};

module.exports = invertTree;
