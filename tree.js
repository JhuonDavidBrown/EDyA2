

class Person {
    constructor(fullName, birthDate) {
        this.fullName = fullName;     
        this.birthDate = birthDate;   
        this.children = [];           
    }

    addChild(child) {
        this.children.push(child);
    }
}

class FamilyTree {
    constructor(root) {
        this.root = root; 
    }

    printPreOrder(node = this.root) {
        if (node === null) return;
        console.log(`Name: ${node.fullName}, Birth Date: ${node.birthDate}`);
        node.children.forEach(child => this.printPreOrder(child));
    }

    printInOrder(node = this.root) {
        if (node === null) return;
        if (node.children.length > 0) {
            this.printInOrder(node.children[0]); 
        }
        console.log(`Name: ${node.fullName}, Birth Date: ${node.birthDate}`);
        for (let i = 1; i < node.children.length; i++) {
            this.printInOrder(node.children[i]); 
        }
    }

    printPostOrder(node = this.root) {
        if (node === null) return;
        node.children.forEach(child => this.printPostOrder(child));
        console.log(`Name: ${node.fullName}, Birth Date: ${node.birthDate}`);
    }
}

const greatGrandparent = new Person('Great Grandparent', '1900-01-01');
const grandparent = new Person('Grandparent', '1925-06-15');
const parent = new Person('Parent', '1950-03-20');
const child1 = new Person('Child 1', '1975-09-05');
const child2 = new Person('Child 2', '1978-11-22');
const grandchild1 = new Person('Grandchild 1', '2000-07-10');
const grandchild2 = new Person('Grandchild 2', '2003-12-30');

greatGrandparent.addChild(grandparent);
grandparent.addChild(parent);
parent.addChild(child1);
parent.addChild(child2);
child1.addChild(grandchild1);
child2.addChild(grandchild2);

const familyTree = new FamilyTree(greatGrandparent);

console.log('Pre-Order Traversal:');
familyTree.printPreOrder();
console.log('---');

console.log('In-Order Traversal:');
familyTree.printInOrder();
console.log('---');

console.log('Post-Order Traversal:');
familyTree.printPostOrder();
