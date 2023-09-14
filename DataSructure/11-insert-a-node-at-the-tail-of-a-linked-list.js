function insertNodeAtTail(head, data) {
    let newData = new SinglyLinkedListNode(data); 
    if(head == null){
        head = newData; 
    } else {
        let currnetItem = head; 
        while(currnetItem.next != null){
            currnetItem = currnetItem.next; 
        }
        currnetItem.next = newData;
    }
    
    return head; 
}
