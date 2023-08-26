class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node(2)
const b = new Node(8)
const c = new Node(3)
const d = new Node(7)

a.next = b
b.next = c
c.next = d

const sumList = (head) => {
    let sum = 0
    let curr = head
    while(curr !== null){
        sum = sum + curr.val
        curr = curr.next
    }

    return sum
}

console.log(sumList(a))