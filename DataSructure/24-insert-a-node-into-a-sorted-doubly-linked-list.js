function sortedInsert(llist, data) {
    let head = llist; 
    
    let newNode = new DoublyLinkedList(); 
    newNode.data = data; 
    newNode.next = null; 
    newNode.prev = null; 
    
  
    let prevNode = null; 
    while(head.data < data){
        if(head.next == null){
            // old items < new item
            newNode.prev = head; 
            head.next = newNode; 
            return llist; 
        }
        prevNode = head; 
        head = head.next; 
    }
    
    if(prevNode == null){
        // new item < old items
        newNode.next = llist; 
        return newNode;
    }
    
    // insert between old items
    newNode.next = head; 
    newNode.prev = prevNode; 
    prevNode.next = newNode; 

    
    return llist;
}
