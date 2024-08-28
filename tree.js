class Person {
    constructor(fullName, birthdate) {
        this.fullName = fullName;
        this.birthdate = birthdate;
    }

    toString() {
        return `${this.fullName} (${this.birthdate})`;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    isLeaf() {
        return this.children.length === 0;
    }
}

class FamilyTree {
    constructor() {
        this.root = null;
    }

    search(fullName, node = this.root) {
        if (!this.root) {
            return null;
        }
        if (this.root.value.fullName === fullName) {
            return this.root;
        } else {
            const children = node.children;
            const inChildren = children.find(item => item.value.fullName === fullName);
            if (inChildren) {
                return inChildren;
            } else {
                let hasChild;
                children.forEach(item => {
                    if (hasChild) {
                        return;
                    }
                    hasChild = this.search(fullName, item);
                });
                return hasChild;
            }
        }
    }

    insert(person, parentFullName) {
        const newNode = new Node(person);
        if (!parentFullName) {
            if (!this.root) {
                this.root = newNode;
            } else {
                return null;
            }
        } else {
            const parentNode = this.search(parentFullName);
            if (parentNode) {
                parentNode.children.push(newNode);
            } else {
                console.log(`Parent ${parentFullName} not found.`);
            }
        }
    }

    preOrder(node = this.root) {
        if (!node) {
            return;
        }
        console.log(node.value.toString());
        node.children.forEach(element => {
            this.preOrder(element);
        });
    }

    postOrder(node = this.root) {
        if (!node) {
            return;
        }
        node.children.forEach(element => {
            this.postOrder(element);
        });
        console.log(node.value.toString());
    }

    inOrder(node = this.root) {
        if (!node) {
            return;
        }
        if (node.children.length === 0) {
            console.log(node.value.toString());
        } else {
            this.inOrder(node.children[0]);
            console.log(node.value.toString());
            for (let i = 1; i < node.children.length; i++) {
                this.inOrder(node.children[i]);
            }
        }
    }
}

const familyTree = new FamilyTree();

familyTree.insert(new Person("Bisabuelo Paterno", "1900-01-01"));
familyTree.insert(new Person("Abuelo Paterno", "1930-05-15"), "Bisabuelo Paterno");
familyTree.insert(new Person("Padre", "1960-10-20"), "Abuelo Paterno");
familyTree.insert(new Person("Yo", "1990-12-25"), "Padre");
familyTree.insert(new Person("Hijo", "2020-06-30"), "Yo");

console.log("Pre-orden:");
familyTree.preOrder();

console.log("\n Post-orden:");
familyTree.postOrder();

console.log("\nIn-orden:");
familyTree.inOrder();
