class TreeNode {
	val: number
	left: TreeNode | null
	right: TreeNode | null
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = (val === undefined ? 0 : val)
		this.left = (left === undefined ? null : left)
		this.right = (right === undefined ? null : right)
	}
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
	if (!p && !q) {
        return true;
    }

	if (!!p && !!q) {
		const stack: TreeNode[] = [];
		stack.push(p);
		stack.push(q);

		while (stack.length != 0) {
			let node1 = stack.pop();
			let node2 = stack.pop();

			if (!node1 && !node2) continue;
			if (!node1 || !node2) return false;
			if (node1.val !== node2.val) return false;

			const pushArray = [ node1.left, node2.left, node1.right, node2.right];

			stack.push(...pushArray as TreeNode[]);
		}

		return true;
	}

	return false;
}
