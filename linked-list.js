class LinkedList {
    constructor(listHead = null) {
        this.listHead = listHead
    };
    append(value) {
        const node = new Node(value)
        if(this.listHead === null){
            this.listHead = node
        }
        else {
            let temp = this.listHead
            while(temp.nextNode !== null) {
                temp = temp.nextNode
            }
            temp.nextNode = node
        }
    };
    prepend(value) {
        const node = new Node(value)
        let temp = this.listHead;
        this.listHead = node;
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
    // returns the first node of the list
    head() {
        if(this.listHead === null) {
            return undefined
        }
        else {
            return this.listHead.value
        }
    }
    // returnts the last node of the list
    tail() {
        if(this.listHead === null) {
            return undefined
        }
        else {
            let temp = this.listHead
            while(temp.nextNode !== null) {
                temp = temp.nextNode
            }
            return temp;
        }
    }
    // returns node at the index
    at(index) {
        if(index < 0 || !Number.isInteger(index)) {
            return;
        }
        let temp = this.listHead
        for(let i = 0; i < index; i++) {
            temp = temp.nextNode
            if(temp === null) {
            return undefined
            }
        }
        return temp;
    };
    pop() {
        if(this.listHead === null) {
            return;
        }
        let temp = this.listHead
        this.listHead = this.listHead.nextNode
        return temp.value
    };
    contains(value) {
        let temp = this.listHead;
        while(temp !== null) {
            if(temp.value === value) {
                return true
            }
            temp = temp.nextNode
        }
        return false
    };
    findIndex(value) {
        let temp = this.listHead;
        let count = 0;
        while(temp !== null) {
            if(temp.value === value) {
                return count;
            }
            temp = temp.nextNode
            count++
        }
        return -1;
    };
    toString() {
        const leftBracket = "( "
        const rightBracket = " )"
        const arrow = " -> "
        let result = ""
        let temp = this.listHead
        while(temp !== null) {
            result += leftBracket + temp.value + rightBracket + arrow
            temp = temp.nextNode
        }
        result += "null"
        return result;
    };

}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }

}

export { LinkedList, Node}