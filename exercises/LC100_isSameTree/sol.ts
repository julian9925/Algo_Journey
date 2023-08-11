//   Definition for a binary tree node.
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
        const queue: TreeNode[] = [];
          queue.push(p);
          queue.push(q);
          while (queue.length !=0){
              let q2 = queue.pop();  
              let q1 = queue.pop();
            
              if (!q1 && !q2) continue;
              if (!q1 || !q2) return false;
              if (q1.val !== q2.val) return false;

              queue.push(q1.left as TreeNode);
              queue.push(q2.left as TreeNode);
              queue.push(q1.right as TreeNode);
              queue.push(q2.right as TreeNode);
          }
          return true;
    }

    return false;
};

module.exports = isSameTree;