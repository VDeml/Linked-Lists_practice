class LinkedList {
    constructor(head = null) {
        this.head = head
    }
    append(value) {
        if(this.head === null){
            this.head = value
        }
        else {
            let temp = this.head
            while(temp.nextNode !== null) {
                temp = temp.nextNode
            }
            temp.nextNode = value
        }
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }

}

const firstNode = new Node("first")
const secondNode = new Node("second")


const list = new LinkedList()



list.append(firstNode)
list.append(secondNode)

console.log(list)