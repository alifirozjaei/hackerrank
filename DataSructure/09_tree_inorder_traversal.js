function inOrder(root) {
    function inOrderTravel(tree){
        if (tree == null){
            return []; 
        }
        return [...inOrderTravel(tree.left), tree.data, ...inOrderTravel(tree.right)]; 
    }
    let result = inOrderTravel(root); 
    console.log(...result);
}
