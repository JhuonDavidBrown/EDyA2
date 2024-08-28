
class Queue{
    constructor(){
        this.queue = [];
    }

    enqueue(element){
        this.queue.push(element);
        return this.queue;
    }
    dequeue(){
        return this.queue.shift();
    }
    peek(){
        return this.queue[0];
    }
    size(){
        return this.queue.length;
    }
    isEmpty(){
        return this.queue.length === 0;
    }
    print(){
        return this.queue;
    }
}
const queue = new Queue();

console.log(queue.enqueue(["Juan David Moreno","10:00 AM"]));
console.log(queue.enqueue("Joun David Brown 10:05 AM"));
console.log(queue.isEmpty());
console.log(queue.dequeue());

