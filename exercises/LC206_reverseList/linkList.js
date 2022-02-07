class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkList {
    constructor() {
        this.head = null;
        this.length = 1;
    }

    append(value) {
        const node = new Node(value);
        
        if (this.head === null) {
            this.head = node;
        }  else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }

            current.next = node;
        }  
    }

    getAllList() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next || undefined;
        }
    }

    get Length() {
        return this.length;
    }
}

const list = new LinkList();
list.append(0);
// list.append(1);
// list.append(0);
// list.append(1);
// list.append(3);


list.getAllList();
console.log(list.length);