function utopianTree(n) {
    let i = 1; 
    let height = 1; 
    while(i <= n){
        if(i % 2 == 0){
            height++;
        } else {
            height *= 2; 
        }
        i++;
    } 
    return height; 
}
