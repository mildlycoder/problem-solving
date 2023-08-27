/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    head = reverseList(head);
    let curr = head;
    let prev = null
    let index = 1;
    while(curr !== null){
        if(index === n){
            if(prev == null){
                curr = curr.next
            } else prev.next = curr.next;
        }
        prev = curr;
        index = index + 1;
        curr = curr.next;
    }
    reverseList(head)

    return head;
};

const reverseList = (head) => {
    let prev = null;
    let curr = head;
    while(curr !== null){
        const next = curr.next;
        curr.next = prev
        prev = curr
        curr = next
    }

    return prev;
}