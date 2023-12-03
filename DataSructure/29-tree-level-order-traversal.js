function levelOrder(root){
    let travelQueue = []; 
    let result = [];
     
    travelQueue.push(root); 
    
    while(travelQueue.length){
        let node = travelQueue.shift(); 
        
        if(node != null) {
            result.push(node.data); 
            travelQueue.push(node.left);
            travelQueue.push(node.right);
        }
    }
    
    console.log(result.join(" "));
}
