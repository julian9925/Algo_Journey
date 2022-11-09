/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const queue: TreeNode[] = [];
  const result: number[][] = [];

  queue.push(root);
  

  while (queue.length) {
    const len = queue.length;
    const row = [];

    for (let i = 0; i < len; i++) {
      const current = queue.shift() as TreeNode;
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      row.push(current.val);
    }
    
    result.push(row);
  }

  return result;
};

module.exports = levelOrder;