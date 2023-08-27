/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {

    let prev = null;
    let curr = head;
    const newHead = null;
    
    while(curr !== null && curr.next !== null){
        const first = curr;
        const second = curr.next;
        const nextPair = second.next;
        
        if(prev !== null){
            prev.next = second;
        } else {
            newHead = second;
        }

        second.next = first;
        first.next = newPair;

        prev = first;
        curr = nextPair;
    };

    return newHead || head
};