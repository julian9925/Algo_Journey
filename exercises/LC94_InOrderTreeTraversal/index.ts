//   Definition for a binary tree node.
//   class TreeNode {
//       val: number
//       left: TreeNode | null
//       right: TreeNode | null
//       constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//           this.val = (val === undefined ? 0 : val)
//           this.left = (left === undefined ? null : left)
//           this.right = (right === undefined ? null : right)
//       }
//   }

function inorderTraversal(root: TreeNode | null): number[] {
	const nodeStack: TreeNode[] = [];
	let result: number[] = [];
	if (!root) return result;

	let curretNode = root;

	while (!!curretNode || nodeStack.length > 0) {
		
		if (!!curretNode) {
			// continue to left
			nodeStack.push(curretNode);
			curretNode = curretNode.left as TreeNode;
		} else {
			// return last visited tree
			const node = nodeStack.pop() as TreeNode;
			result.push(node.val);
			curretNode = node.right as TreeNode;
		}
	}
	


	return result;
};


function prerderTraversal(root: TreeNode | null): number[] {
	const nodeStack: TreeNode[] = [];
	let result: number[] = [];
	if (!root) return result;

	let curretNode = root;

	while (!!curretNode || nodeStack.length > 0) {
		
		if (!!curretNode) {
			// continue to left
			result.push(curretNode.val);
			nodeStack.push(curretNode);
			curretNode = curretNode.left as TreeNode;
		} else {
			// return last visited tree
			const node = nodeStack.pop() as TreeNode;
			curretNode = node.right as TreeNode;
		}
	}
	


	return result;
};


// function inOrder(root: TreeNode) { 
// 	root.left && inOrder(root.left) 
// 	result.push(root.val) 
// 	root.right && inOrder(root.right) 
// }

// inOrder(root);