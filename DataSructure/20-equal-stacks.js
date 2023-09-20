function equalStacks(h1, h2, h3) {
    let height1 = h1.reduce((acc, item) => acc + item, 0);
    let height2 = h2.reduce((acc, item) => acc + item, 0);
    let height3 = h3.reduce((acc, item) => acc + item, 0);
    
    while(!(height1 == height2 && height2 == height3)){
        let maxHeight = Math.max(height1, height2, height3); 
        
        if(height1 == maxHeight){
            let item = h1.shift(); 
            height1 -= item; 
        } else if(height2 == maxHeight){
            let item = h2.shift(); 
            height2 -= item; 
        } else if(height3 == maxHeight){
            let item = h3.shift(); 
            height3 -= item; 
        } 
    }
    
    return height1;
}
