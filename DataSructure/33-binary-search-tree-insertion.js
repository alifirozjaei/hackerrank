function processData(input) {
    class Node {
        constructor(data) {
            this.data = data;
            this.left = null;
            this.right = null;
        }
    }

    class BST {
        constructor() {
            this.root = null;
        }

        insert(data) {
            let newNode = new Node(data);
            if (this.root == null) {
                this.root = newNode;
            } else {
                this.insertNewNode(this.root, newNode)
            }
        }

        insertNewNode(node, newNode) {
            if (newNode.data <= node.data) {
                if (node.left == null) {
                    node.left = newNode;
                } else {
                    this.insertNewNode(node.left, newNode)
                }
            } else {
                if (node.right == null) {
                    node.right = newNode;
                } else {
                    this.insertNewNode(node.right, newNode)
                }
            }
        }

        preOrder() {
            let result = this.preOrderTravel(this.root);
            return result;
        }

        preOrderTravel(tree) {
            if (tree == null) {
                return [];
            }
            return [tree.data, ...this.preOrderTravel(tree.left), ...this.preOrderTravel(tree.right)];
        }
    }

    let bst = new BST();

    input.split("\n")[1].split(" ").forEach(item => {
        bst.insert(parseInt(item));
    });

    console.log(bst.preOrder().join(" "))
}
