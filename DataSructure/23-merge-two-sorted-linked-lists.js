function mergeLists(head1, head2) {
    let head = new SinglyLinkedListNode();
    if(head1.data <= head2.data){
        head.data = head1.data; 
        head1 = head1.next; 
    } else {
        head.data = head2.data; 
        head2 = head2.next; 
    } 
    
    let currentHead = head; 
    
    while(!(head1 == null && head2 == null)){
        let newNode = new SinglyLinkedListNode();
        
        if(head1 == null){
            newNode = head2; 
            currentHead.next = newNode; 
            break; 
        } else if(head2 == null){
            newNode = head1; 
            currentHead.next = newNode; 
            break;
        } else if(head1.data <= head2.data){
            newNode.data = head1.data; 
            head1 = head1.next; 
        } else {
            newNode.data = head2.data; 
            head2 = head2.next; 
        }
        
        currentHead.next = newNode; 
        currentHead = currentHead.next; 
    }
    
    return head;
}
