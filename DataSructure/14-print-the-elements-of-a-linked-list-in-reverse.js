function reversePrint(llist) {
    let next = null; 
    let current = llist; 
    let prev = null; 
    while(current != null){
        next = current.next; 
        current.next = prev; 
        prev = current; 
        current = next;
    }
    
    let head = prev; 
    while(head != null){
        console.log(head.data); 
        head = head.next; 
    }

}
