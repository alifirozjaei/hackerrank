function insertNodeAtPosition(llist, data, position) {
    let afterPositionData = llist; 
    for(let currentPosition=0; currentPosition<position; currentPosition++){
        afterPositionData = afterPositionData.next; 
    }
    
    let newData = new SinglyLinkedListNode(data); 
    newData.next = afterPositionData; 
    
    let insertPosition = llist; 
    for(let currentPosition=0; currentPosition<position-1; currentPosition++){
        insertPosition = insertPosition.next; 
    }
    insertPosition.next = newData; 
    return llist;
}
