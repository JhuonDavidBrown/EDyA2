
// Definimos la clase Nodo, que representa cada tarea en la lista enlazada
class Node {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.next = null; // Apunta al siguiente nodo en la lista
    }
}

// Definimos la clase LinkedList, que gestiona la lista de TODOs
class LinkedList {
    constructor() {
        this.head = null; // El primer nodo de la lista
    }

    // Método para agregar un nuevo nodo al final de la lista
    append(title, description) {
        const newNode = new Node(title, description);
        if (this.head === null) {
            // Si la lista está vacía, el nuevo nodo será el primer nodo
            this.head = newNode;
        } else {
            // Si la lista no está vacía, recorremos la lista hasta el final
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode; // Agregamos el nuevo nodo al final de la lista
        }
    }

    // Método para imprimir todas las tareas en la lista
    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(`Title: ${current.title}`);
            console.log(`Description: ${current.description}`);
            console.log('---');
            current = current.next; // Pasamos al siguiente nodo
        }
    }
}

// Creamos una instancia de LinkedList y agregamos algunas tareas
const todoList = new LinkedList();
todoList.append('Buy groceries', 'Milk, eggs, bread, and cheese');
todoList.append('Walk the dog', 'Take the dog for a walk in the park');
todoList.append('Read a book', 'Finish reading "The Great Gatsby"');
todoList.append('Do laundry', 'Wash and dry clothes');

// Imprimimos todas las tareas en la lista
todoList.printList();
