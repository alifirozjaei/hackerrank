function preOrder(root) {
    function preOrderTravel(tree){
        if (tree == null){
            return []; 
        }
        return [tree.data, ...preOrderTravel(tree.left), ...preOrderTravel(tree.right)]; 
    }
    let result = preOrderTravel(root); 
    console.log(...result);
}
