function insertNodeAtHead(head, data) {
    let newData = new SinglyLinkedListNode(data); 
    if (head == null){
        return newData;
    }else {
        newData.next = head; 
        return newData; 
    }
}
