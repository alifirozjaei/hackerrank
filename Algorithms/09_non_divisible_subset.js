function nonDivisibleSubset(k, s) {
    let remCounter = new Array(k).fill(0);
    
    s.forEach(number => remCounter[number%k] += 1); 
    let count = Math.min(remCounter[0], 1); 
    for(let i=1; i<= Math.floor(k/2); i++){
        if( i == (k-i)) {
            count += Math.min(remCounter[i], 1);
        } else {
            count += Math.max(remCounter[i], remCounter[k-i]); 
        }
    }
    

    return count;
}
