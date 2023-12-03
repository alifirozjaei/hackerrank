function migratoryBirds(arr) {
    let typeFreq = {}; 
    arr.forEach(item => {
        if (typeFreq[item] == undefined){
            typeFreq[item] = 1;  
        } else {
            typeFreq[item] += 1; 
        }
    }); 
    
    let maxFreq = Number.NEGATIVE_INFINITY; 
    let maxKey = Number.NEGATIVE_INFINITY;
    
    for (let key in typeFreq){
        if (typeFreq[key] > maxFreq || (parseInt(key) < maxKey && typeFreq[key] == maxFreq)){
            maxFreq = typeFreq[key];
            maxKey = parseInt(key); 
        } 
    } 
    
    return maxKey;
}
