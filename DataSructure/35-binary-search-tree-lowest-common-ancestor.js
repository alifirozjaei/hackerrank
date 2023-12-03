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

        findLCA(value1, value2) {
            let tree = this.root;
            let commonNode = this.LCA(tree, Math.min(value1, value2), Math.max(value1, value2));
            return commonNode;
        }

        LCA(tree, value1, value2) {
            if (value1 <= tree.data && tree.data <= value2) {
                return tree.data;
            } else if (value1 < tree.data && value2 < tree.data) {
                return this.LCA(tree.left, value1, value2);
            } else {
                return this.LCA(tree.right, value1, value2);
            }
        }
    }

    input = input.split("\n");
    
    let bst = new BST();
    let [v1, v2] = input[2].split(" ").map(item => parseInt(item));
    
    input[1].split(" ").forEach(item => {
        bst.insert(parseInt(item));
    });
    
    console.log(bst.findLCA(v1, v2));
}
