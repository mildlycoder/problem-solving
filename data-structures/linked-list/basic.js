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

const printLinkedList = (head) => {
    let curr = head
    while(curr !== null){
        console.log(curr.val)
        curr = curr.next
    }
}

const recursivePrint = (head) => {
    if(head === null) return;
    console.log(head.val)
    recursivePrint(head.next)
}

printLinkedList(a)
console.log("-------------------------------------")
recursivePrint(a)