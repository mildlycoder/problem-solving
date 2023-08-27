class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const a = new Node("A")
const b = new Node("B")
const c = new Node("C")
const d = new Node("D")

a.next = b
b.next = d
d.next = c

const reverseList = (head) => {
    let curr = head
    let prev = null
    while(curr !== null){
        const next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
}

const printLinkedList = (head) => {
    let curr = head
    while(curr !== null){
        console.log(curr.val)
        curr = curr.next
    }
}

console.log(printLinkedList(a))
console.log("----------------")
console.log(printLinkedList(reverseList(a)))