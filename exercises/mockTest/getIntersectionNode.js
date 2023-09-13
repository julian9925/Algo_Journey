/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// var getIntersectionNode = function(headA, headB) {
//     if(!headA || !headB) return null;
    
//     let currentA = headA;
//     let currentB = headB;
    
//     while (!!currentA && !!currentB) {
//         if (currentA.val === currentB.val) return currentA;
		
// 		currentA = currentA.next;
// 		currentB = currentB.next;
//     }
// };

/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    const area1 = Math.abs(ax2 - ax1) * Math.abs(ay2 - ay1);
    const area2 = Math.abs(bx2 - bx1) * Math.abs(by2 - by1);

    function overlap() {
        const xOverlap = Math.max(0, Math.min(ax2, bx2) - Math.max(ax1, bx1));
        const yOverlap = Math.max(0, Math.min(ay2, by2) - Math.max(ay1, by1));
        return xOverlap * yOverlap;
    }

    if (ax1 >= bx2 || ax2 <= bx1 || ay1 >= by2 || ay2 <= by1) return area1 + area2;

    return area1 + area2 - overlap();
};

`-2
-2
2
2
3
3
4
4`

console.log(computeArea(-3, 0, 3, 4, 0, -1, 9, 2));