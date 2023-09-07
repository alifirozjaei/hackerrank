function removeDuplicates(llist) {
    let prevNode = llist; 
    let currentNode = llist.next;
     
    let result = new SinglyLinkedListNode(); 
    result.data = prevNode.data; 
    result.next = null; 
    let endNode = result; 
    
    while (currentNode != null) {
        if (currentNode.data != prevNode.data) {
            prevNode = currentNode;
             
            let temp = new SinglyLinkedListNode(); 
            temp.data = currentNode.data; 
            temp.next = null; 
            endNode.next = temp;
            endNode = endNode.next; 
            
        } 
        currentNode = currentNode.next; 
    }
    return result;
}
