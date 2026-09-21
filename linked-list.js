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
    prepend(value) {
        let temp = this.head;
        this.head = value;
        this.head.nextNode = temp
    }
    // returns the total number of nodes in list
    size() {
        let count = 0;
        let temp = this.head
        while(temp !== null) {
            temp = temp.nextNode
            count ++
        }
        return count
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }

}
// Creating the list
const list = new LinkedList()

// first set of nodes, to test "append" method
const firstNode = new Node("first")
const secondNode = new Node("second")

const prepended = new Node("prepended before FIRST")

const fourth = new Node("fourt?")





list.append(firstNode)
list.append(secondNode)


list.prepend(prepended)
list.append(fourth)
console.log(list.size())