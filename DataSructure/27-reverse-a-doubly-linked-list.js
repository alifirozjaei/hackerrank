function reverse(llist) {
    let head = llist; 
    let current; 
    
    while(head != null){
        let prev = head.next; 
        let next = head.prev; 
        
        current = head; 
        head = head.next; 
        
        current.next = next; 
        current.prev = prev; 
    }
    
    return current; 
}
