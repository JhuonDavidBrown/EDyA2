
class City {
    constructor(name) {
        this.name = name; 
    }
}

class Person {
    constructor(name, age, city) {
        this.name = name; 
        this.age = age;   
        this.city = city; 
    }
}

class Graph {
    constructor() {
        this.nodes = new Map(); 
        this.edges = new Map(); 
    }

    addNode(node) {
        if (!this.nodes.has(node.name)) {
            this.nodes.set(node.name, node);
            this.edges.set(node.name, []); 
        }
    }

    addEdge(node1, node2) {
        if (this.nodes.has(node1.name) && this.nodes.has(node2.name)) {
            this.edges.get(node1.name).push(node2.name);
            this.edges.get(node2.name).push(node1.name); 
        } else {
            throw new Error('Uno o ambos nodos no existen en el grafo');
        }
    }

    getPeopleInCity(cityName) {
        const peopleInCity = [];
        for (const person of this.nodes.values()) {
            if (person instanceof Person && person.city.name === cityName) {
                peopleInCity.push(person);
            }
        }
        return peopleInCity;
    }

    printPeopleInCity(cityName) {
        const people = this.getPeopleInCity(cityName);
        if (people.length === 0) {
            console.log(`No hay personas en la ciudad ${cityName}`);
            return;
        }
        console.log(`Personas que viven en ${cityName}:`);
        people.forEach(person => {
            console.log(`Name: ${person.name}, Age: ${person.age}`);
        });
    }
}

const newYork = new City('New York');
const losAngeles = new City('Los Angeles');
const chicago = new City('Chicago');

const alice = new Person('Alice', 30, newYork);
const bob = new Person('Bob', 25, losAngeles);
const charlie = new Person('Charlie', 35, newYork);
const diana = new Person('Diana', 40, chicago);

const graph = new Graph();

graph.addNode(newYork);
graph.addNode(losAngeles);
graph.addNode(chicago);
graph.addNode(alice);
graph.addNode(bob);
graph.addNode(charlie);
graph.addNode(diana);

graph.addEdge(alice, bob);
graph.addEdge(bob, charlie);
graph.addEdge(charlie, diana);

graph.printPeopleInCity('New York');

graph.printPeopleInCity('Los Angeles');

graph.printPeopleInCity('Chicago');
