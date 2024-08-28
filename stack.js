

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
        if(this.isEmpty())console.log("La pila está vacía");
        this.items.forEach((book,index)=>{
            console.log(`Book ${index + 1}:`);
            console.log(`Name: ${book.name}`);
            console.log(`ISBN: ${book.isbn}`);
            console.log(`Author: ${book.author}`);
            console.log(`Editorial: ${book.editorial}`);
            console.log('---');
        });
    }
}
const bookStack = new Stack();

bookStack.push(new Book('To Kill a Mockingbird', '978-0-06-112008-4', 'Harper Lee', 'J.B. Lippincott & Co.'));
bookStack.push(new Book('1984', '978-0-452-28423-4', 'George Orwell', 'Secker & Warburg'));
bookStack.push(new Book('The Great Gatsby', '978-0-7432-7356-5', 'F. Scott Fitzgerald', 'Scribner'));
bookStack.push(new Book('Moby-Dick', '978-1-5011-9763-1', 'Herman Melville', 'Harper & Brothers'));

bookStack.printStack();

console.log("Book at the top of the stack:");
const topBook = bookStack.peek();
console.log(`Name: ${topBook.name}`);
console.log(`ISBN: ${topBook.isbn}`);
console.log(`Author: ${topBook.author}`);
console.log(`Editorial: ${topBook.editorial}`);