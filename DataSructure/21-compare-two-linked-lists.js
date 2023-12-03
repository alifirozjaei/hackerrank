function CompareLists(llist1, llist2) {
    let isEqual = 1; 
    let headA = llist1; 
    let headB = llist2 ;
    while(true){
        if(headA == null && headB == null){
            break;
        }
        
        if(headA == null && headB != null){
            isEqual = 0; 
            break;
        }
        
        if(headA != null && headB == null){
            isEqual = 0; 
            break;
        }
        
        if(headA.data != headB.data){
            isEqual = 0; 
            break; 
        }
        
        headA = headA.next; 
        headB = headB.next; 
    }
    
    return isEqual; 
}
