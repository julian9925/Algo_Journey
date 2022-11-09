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
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
function levelOrder(root) {
    if (!root)
        return [];
    var queue = [];
    var result = [];
    queue.push(root);
    while (queue.length) {
        var len = queue.length;
        var row = [];
        for (var i = 0; i < len; i++) {
            var current = queue.shift();
            console.log(current.val);
            if (current.left)
                queue.push(current.left);
            if (current.right)
                queue.push(current.right);
            row.push(current.val);
        }
        result.push(row);
        console.log(result);
    }
    return result;
}
;
module.exports = levelOrder;
