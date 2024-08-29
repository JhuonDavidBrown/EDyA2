

class Node {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    isLeaf() {
        return this.left == null && this.right == null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            let current = this.root;
            let isFound = false;
            while (!isFound) {
                if (current.value === value) {
                    isFound = true;
                    return this;
                }
                if (value < current.value) {
                    if (!current.left) {
                        current.left = newNode;
                        isFound = true;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else {
                    if (!current.right) {
                        current.right = newNode;
                        isFound = true;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    preOrder(node = this.root) {
        if (!node) {
            return;
        }
        console.log(node.value);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }

    postOrder(node = this.root) {
        if (!node) {
            return;
        }
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.value);
    }

    inOrder(node = this.root) {
        if (!node) {
            return;
        }
        this.inOrder(node.left);
        console.log(node.value);
        this.inOrder(node.right);
    }

    getHeight(node = this.root) {
        if (!node) {
            return 0;
        }
        const leftHeight = this.getHeight(node.left);
        const rightHeight = this.getHeight(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }
}

const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(1);
tree.insert(9);

console.log("Altura del árbol:", tree.getHeight());