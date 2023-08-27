/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const emptySum = new ListNode(0);
    let curr = emptySum;
    let carry = 0;

    while(l1 !== null || l2 !== null || carry !== 0){
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;

        const sum = val2 + val2 + carry;
        carry = Math.floor(sum/10)

        curr.next = new ListNode(sum % 10);
        curr = curr.next;

        if(l1 !== null) l1 = l1.next;
        if(l2 !== null) l2 = l2.next;
    }

    return emptySum.next
};

