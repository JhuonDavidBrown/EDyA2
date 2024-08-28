

//Implementación con arreglos
class Stack{
    constructor(){
        this.stack = [];
    }

    push(element){
        this.stack.push(element);
        return this.stack;
    }
    pop(){
        return this.stack.pop();
    }
    peek(){
        return this.stack[this.stack.length-1];
    }
    size(){
        return this.stack.length;
    }
    print(){
        console.log(this.stack);
    }
}

const stack = new Stack();
console.log(stack.push(["La metamorphosis","12132","Frank Kafka","Yaper"]));
console.log(stack.push(["El extranjero","2212342","Albert Camus","Amp"]));
console.log(stack.size());
stack.print();
console.log(stack.peek());
console.log(stack.pop());

/*
console.log(stack.size());
console.log(stack.push("John Cena"));
console.log(stack.push("The Rock"));
console.log(stack.size());
stack.print();
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
*/


//Implementación con objetos

class Stack_2{
    constructor(){
        this.stack={};
        this.count = 0;
    }

    push(element){
        this.stack[this.count] = element;
        this.count++;
        return this.stack;
    }
    pop(){
        this.count--;
        const element = this.stack[this.count];
        delete this.stack[this.count];
        return element;
    }
    peek(){
        return this.stack[this.count-1];
    }
    size(){
        return this.count;
    }
    print(){
        console.log(this.stack);
    }
}
class Book{
    constructor(name,ISBN,author,editorial){
        this.name = name;
        this.ISBN = ISBN;
        this.author = author;
        this.editorial = editorial;
    }
}
const stack_2 = new Stack_2();
const book = new Book("El extranjero","21309","Albert Camus","RAA");

console.log(stack_2.push(new Book("La metamorphosis","12132","Frank Kafka","Yaper")));
console.log(stack_2.size());
console.log(stack_2.push(book));
stack_2.print();



