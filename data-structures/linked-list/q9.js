/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || k === 0){
        return head;
    }

    let tail = head;
    let length = 1;

    while(tail.next!== null){
        tail = tail.next;
        length++
    }

    tail.next = head;
    k = k % length;

    let curr = head;
    for(let i = 1; i <= length - k; i++){
        curr = curr.next;
    }

    head = curr.next;
    curr.next = null

    return head;
};