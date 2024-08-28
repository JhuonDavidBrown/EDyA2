class Node {
    constructor(title, description, points, next = null) {
        this.title = title;
        this.description = description;
        this.points = points;
        this.next = next;
    }
}

class SimpleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(title, description, points) {
        const newNode = new Node(title, description, points);
        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
    }

    print() {
        let node = this.head;
        while (node != null) {
            console.log(`Title: ${node.title}`);
            console.log(`Description: ${node.description}`);
            console.log(`Points to next TODO: ${node.next ? node.next.title : "None"}`);
            console.log('---');
            node = node.next;
        }
    }
}

const todoList = new SimpleLinkedList();

todoList.append("Buy groceries", "Need to buy milk, bread, and eggs", 3);
todoList.append("Finish project", "Complete the final report for the client", 2);
todoList.append("Workout", "Go to the gym and do a cardio session", 1);

todoList.print();
