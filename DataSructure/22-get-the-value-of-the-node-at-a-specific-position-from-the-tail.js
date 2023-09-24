function getNode(llist, positionFromTail) {
    let head = llist; 
    let positionFromTailNode = llist; 
    let counter = 0; 
    while(head != null){
        if(counter > positionFromTail){
            positionFromTailNode = positionFromTailNode.next;
        }
        head = head.next; 
        counter ++; 
    }
    
    return positionFromTailNode.data; 
}
