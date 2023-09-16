function reverse(llist) {
    let current = llist; 
    let prev = null; 
    let next = null; 
    while(current != null){
        next = current.next; 
        current.next = prev;
        prev = current; 
        current = next;  
    }
    
    return prev; 
    
}
