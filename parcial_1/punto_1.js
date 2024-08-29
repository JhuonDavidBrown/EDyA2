class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    print() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(' -> '));
    }
}

function mergeAndSortLists(list1, list2) {
    let mergedList = new LinkedList();
    let current1 = list1.head;
    let current2 = list2.head;

    while (current1) {
        mergedList.append(current1.value);
        current1 = current1.next;
    }
    while (current2) {
        mergedList.append(current2.value);
        current2 = current2.next;
    }

    let array = [];
    let current = mergedList.head;
    while (current) {
        array.push(current.value);
        current = current.next;
    }

    array.sort((a, b) => a - b);

    let sortedList = new LinkedList();
    array.forEach(value => sortedList.append(value));

    return sortedList;
}

let list1 = new LinkedList();
list1.insert(5);
list1.insert(3);
list1.insert(1);

let list2 = new LinkedList();
list2.insert(6);
list2.insert(4);
list2.insert(2);

console.log("Lista 1:");
list1.print();

console.log("Lista 2:");
list2.print();

let mergedAndSortedList = mergeAndSortLists(list1, list2);

console.log("Lista unida y ordenada de menor a mayor:");
mergedAndSortedList.print();
