class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node("A")
const b = new Node("B")
const c = new Node("C")
const d = new Node("D")

a.next = b
b.next = c
c.next = d

const addValues = (head) => {
    const values = []
    let curr = head
    while(curr !== null){
        values.push(curr.val)
        curr = curr.next
    }

    return values
}

console.log(addValues(a))
