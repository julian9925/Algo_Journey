class ListNode {
	val: number;
	next: ListNode | null;

	constructor(val: number, next = null) {
		this.val = (val === undefined ? 0 : val);
		this.next = (next === undefined ? null : next);
	}
  }
  

function mergeTwoLists(l1: ListNode, l2: ListNode) {
	let mergeList = new ListNode(0);
	let current = mergeList;

	while(l1 !== null && l2 != null) {
		if (l1.val < l2.val) {
			current.next = l1;
			l1 = l1.next as ListNode;
		} else {
			current.next = l2;
			l2 = l2.next as ListNode;
		}

		current = current.next;
	}

	if(l1 !== null){
        current.next = l1;
    }

    if(l2 !== null){
        current.next = l2;
    }
    return mergeList.next
}

module.exports = mergeTwoLists;