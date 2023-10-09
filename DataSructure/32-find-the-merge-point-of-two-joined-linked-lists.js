function findMergeNode(headA, headB) {
    let currentNodeA = headA; 
    let currentNodeB = headB; 
    
    while (currentNodeA != null){
        currentNodeA.visited = true; 
        currentNodeA = currentNodeA.next;
    }
    
    while(currentNodeB != null){
        if (currentNodeB?.visited){
            return currentNodeB.data; 
        }
        currentNodeB = currentNodeB.next;
    }
    
    return "Common Node Not Exist!"; 
}
