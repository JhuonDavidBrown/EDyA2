
class Person{
    constructor(name,arrivedTime){
        this.name = name;
        this.arrivedTime = arrivedTime;
    }
}

class Queue{
    constructor(){
        this.items = [];
    }

    enqueue(person){
        this.items.push(person);
    }
    dequeue(){
        if(this.isEmpty()){
            throw new Error("La cola está vacía");
        }
        return this.items.shift();
    }
    
    peek(){
        if(this.isEmpty()){
            throw new Error("La cola Está vacía");
        }
        return this.items[0];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    printQueue(){
        if(this.isEmpty())console.log("La cola está vacia");

        this.items.forEach((person, index) => {
            console.log(`Person ${index + 1}:`);
            console.log(`Name: ${person.name}`);
            console.log(`Arrived Time: ${person.arrivedTime}`);
            console.log('---');
        }); 
    }
}

const atmQueue = new Queue();

atmQueue.enqueue(new Person("Ali","10:00 AM"));
atmQueue.enqueue(new Person('Bobi', '10:05 AM'));
atmQueue.enqueue(new Person('Charls', '10:10 AM'));
atmQueue.enqueue(new Person('Diana', '10:15 AM'));

atmQueue.printQueue();

console.log('Person at the front of the queue:');
const frontPerson = atmQueue.peek();
console.log(`Name: ${frontPerson.name}`);
console.log(`Arrived Time: ${frontPerson.arrivedTime}`);

console.log('Attending to the front person:');
const attendedPerson = atmQueue.dequeue();
console.log(`Attended Person: ${attendedPerson.name}`);
console.log(`Arrived Time: ${attendedPerson.arrivedTime}`);

console.log('Queue after attending the first person:');
atmQueue.printQueue();