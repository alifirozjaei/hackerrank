function deleteNode(llist, position) {
    let head = llist; 
    if(position == 0){
        return llist.next;
    }
    for(let currentPosition=0; currentPosition<position-1; currentPosition++){
        head = head.next; 
    }
    head.next = head.next.next;
    return llist; 
}
