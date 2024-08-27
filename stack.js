

class Book{
    constructor(name,isbn,author,editorial){
        this.name = name;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }

}
 class Stack{
    constructor(){
        this.items = [];
    }

    push(book){
        this.items.push(book);
    }

    pop(){
        if(this.isEmpty()){
            throw new Error("La pila está vacía");
        }
        return this.items.pop();
    }
    peek(){
        if(this.isEmpty()){
            throw new Error("La pila está vacía");
        }
        return this.items[this.items.length-1];
    }
    isEmpty(){
        return this.items.length === 0;
    }
    printStack(){
        if(this.isEmpty()){
            console.log("La pila está vacía");
        }
    }
 }