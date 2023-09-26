function kangaroo(x1, v1, x2, v2) {
    let result = 'NO' ; 
    
    if(v1 <= v2) {
        return result; 
    }
    
    while(x1 <= x2) {
        if (x1 == x2){
            result = "YES";
            break; 
        }
        x1 += v1; 
        x2 += v2; 
    }
    
    return result; 
}
