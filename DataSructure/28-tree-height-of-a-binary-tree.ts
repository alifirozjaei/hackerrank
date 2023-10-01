function treeHeight(root:TreeNode):string {
    
    function findHeight(tree:TreeNode):number {
        if(tree == null) {
            return -1; 
        }
        return 1 + Math.max(findHeight(tree.left), findHeight(tree.right)); 
    }
    
    return `${findHeight(root)}`;
}
