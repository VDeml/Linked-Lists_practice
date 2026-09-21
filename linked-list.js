class LinkedList {
    constructor(listHead = null) {
        this.listHead = listHead
    };
    append(value) {
        if(this.listHead === null){
            this.listHead = value
        }
        else {
            let temp = this.listHead
            while(temp.nextNode !== null) {
                temp = temp.nextNode
            }
            temp.nextNode = value
        }
    };
    prepend(value) {
        let temp = this.listHead;
        this.listHead = value;
        this.listHead.nextNode = temp
    };
    // returns the total number of nodes in list
    size() {
        let count = 0;
        let temp = this.listHead
        while(temp !== null) {
            temp = temp.nextNode
            count ++
        }
        return count
    };
    head() {
        if(this.listHead === null) {
            return undefined
        }
        else {
            return this.listHead.value
        }
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

console.log(list.head())